import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, need, message } = body;

    if (!name || !email || !need) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Solerya <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "julien.lallemand92@gmail.com",
      replyTo: email,
      subject: `Nouvelle demande de contact Solerya - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #08122E;">
          <h2>Nouvelle demande de contact Solerya</h2>

          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>E-mail :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Besoin principal :</strong> ${need}</p>

          <hr />

          <p><strong>Message :</strong></p>
          <p>${message || "Aucun message renseigné."}</p>

          <hr />

          <p style="font-size: 13px; color: #64748B;">
            Demande envoyée depuis le formulaire de contact Solerya.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        { error: "Erreur lors de l’envoi de l’e-mail." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Erreur API contact :", error);

    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 }
    );
  }
}