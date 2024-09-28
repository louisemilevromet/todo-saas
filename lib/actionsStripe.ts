"use server";
import { prisma } from "@/lib/db";
import { getStripeSession } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { getUser } from "./actionsUser";
import { stripe } from "@/lib/stripe";

export const getDataStripeUser = async (userId: string) => {
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId: true,
        },
      },
    },
  });

  return data;
};

export const createSubscription = async () => {
  // Récupérer l'utilisateur connecté
  const user = await getUser();

  if (!user) {
    console.error("Aucun utilisateur trouvé !");
    return;
  }

  console.log("Utilisateur qui s'abonne :", user); // Log des données de l'utilisateur

  // Récupérer les informations Stripe de l'utilisateur depuis la base de données
  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      stripeCustomerId: true,
    },
  });

  console.log("Informations Stripe de l'utilisateur :", dbUser);

  // Créer une session de paiement Stripe pour cet utilisateur
  const subscriptionUrl = await getStripeSession({
    customerId: dbUser?.stripeCustomerId as string,
    domainUrl: "http://localhost:3000",
    priceId: process.env.STRIPE_API_ID as string,
  });

  console.log("URL de la session d'abonnement Stripe :", subscriptionUrl);

  // Rediriger l'utilisateur vers la page de paiement
  return redirect(subscriptionUrl);
};

export const createCustomerPortal = async () => {
  const user = await getUser();
  const session = await stripe.billingPortal.sessions.create({
    customer: user?.stripeCustomerId as string,
    return_url: "http://localhost:3000/dashboard/payments",
  });
  return redirect(session.url);
};
