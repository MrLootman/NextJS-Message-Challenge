"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendMail() {
  try {
    const info = await transporter.sendMail({
      from: `"Sébastien Lecornu (aka Séboubou)" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject:
        "La vérité ne saurait être cachée aux hommes cis-het et de souche plus longtemps",
      html: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
      }

      header img {
        width: 500px;
        height: 340px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }

      .email-container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }
      .header {
        background: #03028e;
        color: white;
        text-align: center;
        padding: 20px;
        font-size: 24px;
      }
      .body {
        padding: 20px;
        color: #333333;
        line-height: 1.6;
      }
      .footer {
        text-align: center;
        background: #eeeeee;
        padding: 10px;
        font-size: 12px;
        color: #777777;
      }

      section {
        display: flex;
        align-items: center;
      }

      section img {
        border-radius: 50%;
        object-fit: cover;
        margin-left: auto;
      }
    </style>
  </head>
  <body>
    <header>
      <img
        src="https://www.info.gouv.fr/build/images/default-img.2e53c858.png"
        alt="Devise française"
      />
    </header>
    <div class="email-container">
      <div class="header"><strong>C'est enfin assumé !</strong></div>
      <div class="body">
        <p>Bonjour Jérémy,</p>
        <p>Il est grand temps de répandre la bonne nouvelle !</p>
        <p>
          Par le questionnaire qui lui a été adressé, Mme Gauthier a prononcé sa
          pensée profonde sur l'art contemporain, et nous l'en remercions.
        </p>
        <p>
          Comme vous le savez sûrement, l'instabilité politique que nous
          connaissons actuellement implique quelques difficiles conséquences.
          Nos élus, ministres et députés, peinent à trouver consensus quant au
          budget de l'année civile à venir.
        </p>
        <p>
          Afin de mieux orienter nos décisions, nous avons cherché des
          candidates et candidats de façon aléatoire. Ainsi, par sa réponse, Mme
          Gauthier s'est prononcée
          <strong
            >au nom de toutes celles et de tous ceux concerné par l'art
            contemporain, y travaillant de près où de loin.</strong
          >
        </p>

        <p>
          Pour rappel, il était attendu une réponse de sa part quant à la
          question suivante :
          <strong
            >L'art contemporain peut-il dignement être qualifié d'art ?</strong
          >
        </p>
        <p>
          Mme Gauthier ayant par sa réponse affirmé de
          <strong
            >l'art contemporain qu'il ne saurait dignement être qualifié
            d'art</strong
          >, nous envisagerons toutes les économies possibles et nécessaires par
          coupes budgétaires définitives, quoi qu'en diront les partisans
          d'extrême gauche qui agiteront leurs drapeaux de wokistes à franges
          mauves.
        </p>
        <p>Nous actons d'ors et deja la suppression de la niche fiscale 457 permettant de déclarer sa cuvette de toilette comme une œuvre d'art.</p>
        <p>Nous vous souhaitons une excellente continuation.</p>
        <br />
        <section>
          <p>Sébastien LECORNU</p>
          <img
            width="100px"
            height="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/S%C3%A9bastien_Lecornu_2024_%28cropped%29.jpg/960px-S%C3%A9bastien_Lecornu_2024_%28cropped%29.jpg"
          />
        </section>
      </div>
      <div class="footer">© 2025 Vive la république, et vive la France.</div>
    </div>
  </body>
</html>

`,
    });

    console.log("Message sent:", info.messageId);
  } catch (err) {
    console.error(err);
  }
}
