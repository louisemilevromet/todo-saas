import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text(); // Lire le corps de la requête
  const signature = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    // Vérification de l'événement Stripe
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    console.error("Erreur de vérification du webhook:", err);
    return NextResponse.json(
      { message: "Webhook signature verification failed." },
      { status: 400 }
    );
  }

  // Affichage de l'événement dans le terminal pour visualisation
  console.log("Événement reçu:", event.type);

  // Manipulation de l'objet "payment_intent" si l'événement est "payment_intent.succeeded"
  if (event.type === "checkout.session.completed") {
    console.log("Session de checkout complétée :", event.data.object); // Log des données de la session de checkout

    const subscriptionId = event.data.object.subscription as string;

    // Récupérer les informations d'abonnement
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const customerId = subscription.customer; // ID du client

    // Récupérer les informations de l'utilisateur dans ta base de données
    const user = await prisma.user.findUnique({
      where: {
        stripeCustomerId: customerId as string,
      },
    });

    console.log("Utilisateur icii :", user); // Log des données de l'utilisateur qui s'est abonné

    // Logique pour mettre à jour ta table subscription ici
  }

  return NextResponse.json(
    { message: "Événement reçu avec succès" },
    { status: 200 }
  );
}
