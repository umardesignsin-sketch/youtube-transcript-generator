export type HomepageLocale = {
  code: string;
  name: string;
  htmlLang: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitlePrefix: string;
  subtitleLinkText: string;
  subtitleSuffix: string;
  chips: string[];
  metaTitle: string;
  metaDescription: string;
  faqTitle: string;
  faqDescription: string;
  faqs: { q: string; a: string }[];
};

export const homepageLocales: Record<string, HomepageLocale> = {
  es: {
    code: "es",
    name: "Español",
    htmlLang: "es",
    badge: "🚀 Gratis · Sin Registro · Transcripciones Ilimitadas",
    titleLine1: "Generador Gratuito de",
    titleLine2: "Transcripciones de YouTube",
    subtitlePrefix: "Convierte ",
    subtitleLinkText: "YouTube a transcripción",
    subtitleSuffix:
      " en segundos: copia, busca y descarga el texto de cualquier video público de YouTube. Perfecto para estudiantes, creadores, investigadores, especialistas en marketing y desarrolladores que necesitan transcripciones precisas para SEO, IA, aprendizaje y creación de contenido.",
    chips: ["Resultados Instantáneos", "Más de 100 Idiomas", "TXT · SRT · Copiar", "Listo para IA", "Sin Registro"],
    metaTitle: "Generador Gratuito de Transcripciones de YouTube",
    metaDescription:
      "Convierte cualquier video público de YouTube en una transcripción en segundos. Copia, busca y descarga el texto — gratis, sin registro.",
    faqTitle: "Preguntas Frecuentes",
    faqDescription: "Cómo funciona nuestro generador gratuito de transcripciones de YouTube.",
    faqs: [
      {
        q: "¿Es gratuito este generador de transcripciones de YouTube?",
        a: "Sí. Nuestro generador de transcripciones de YouTube es completamente gratuito. No hay suscripciones, tarifas ocultas ni necesidad de crear una cuenta.",
      },
      {
        q: "¿Cómo obtengo la transcripción de un video de YouTube?",
        a: "Simplemente pega la URL de cualquier video público de YouTube en el campo de entrada y haz clic en Generar. La transcripción se extraerá en segundos, permitiéndote copiarla, buscarla o descargarla.",
      },
      {
        q: "¿Puedo descargar las transcripciones de YouTube?",
        a: "Sí. Puedes copiar la transcripción o descargarla como archivo TXT simple, TXT con marcas de tiempo, o subtítulos SRT para estudiar, crear contenido, investigar o usar en flujos de trabajo de IA.",
      },
      {
        q: "¿Funciona con los YouTube Shorts?",
        a: "Sí, siempre que el video tenga subtítulos o transcripciones disponibles.",
      },
      {
        q: "¿Qué idiomas son compatibles?",
        a: "La herramienta admite más de 100 idiomas, según los subtítulos disponibles para el video original de YouTube.",
      },
      {
        q: "¿Necesito instalar algún software?",
        a: "No. Todo funciona directamente en tu navegador. No se requieren extensiones, descargas ni instalación de software.",
      },
    ],
  },
  pt: {
    code: "pt",
    name: "Português",
    htmlLang: "pt",
    badge: "🚀 Grátis · Sem Login · Transcrições Ilimitadas",
    titleLine1: "Gerador Gratuito de",
    titleLine2: "Transcrições do YouTube",
    subtitlePrefix: "Converta ",
    subtitleLinkText: "YouTube em transcrição",
    subtitleSuffix:
      " em segundos — copie, pesquise e baixe o texto de qualquer vídeo público do YouTube. Perfeito para estudantes, criadores, pesquisadores, profissionais de marketing e desenvolvedores que precisam de transcrições precisas para SEO, IA, aprendizado e criação de conteúdo.",
    chips: ["Resultados Instantâneos", "Mais de 100 Idiomas", "TXT · SRT · Copiar", "Pronto para IA", "Sem Cadastro"],
    metaTitle: "Gerador Gratuito de Transcrições do YouTube",
    metaDescription:
      "Converta qualquer vídeo público do YouTube em uma transcrição em segundos. Copie, pesquise e baixe o texto — grátis, sem cadastro.",
    faqTitle: "Perguntas Frequentes",
    faqDescription: "Como funciona nosso gerador gratuito de transcrições do YouTube.",
    faqs: [
      {
        q: "Este gerador de transcrições do YouTube é gratuito?",
        a: "Sim. Nosso gerador de transcrições do YouTube é totalmente gratuito. Não há assinaturas, taxas ocultas ou necessidade de criar uma conta.",
      },
      {
        q: "Como obtenho a transcrição de um vídeo do YouTube?",
        a: "Basta colar a URL de qualquer vídeo público do YouTube no campo de entrada e clicar em Gerar. A transcrição será extraída em segundos, permitindo copiar, pesquisar ou baixar.",
      },
      {
        q: "Posso baixar as transcrições do YouTube?",
        a: "Sim. Você pode copiar a transcrição ou baixá-la como arquivo TXT simples, TXT com marcação de tempo, ou legendas SRT para estudo, criação de conteúdo, pesquisa ou fluxos de trabalho de IA.",
      },
      {
        q: "Funciona com os YouTube Shorts?",
        a: "Sim, desde que o vídeo tenha legendas ou transcrições disponíveis.",
      },
      {
        q: "Quais idiomas são suportados?",
        a: "A ferramenta suporta mais de 100 idiomas, dependendo das legendas disponíveis para o vídeo original do YouTube.",
      },
      {
        q: "Preciso instalar algum software?",
        a: "Não. Tudo funciona diretamente no seu navegador. Nenhuma extensão, download ou instalação de software é necessária.",
      },
    ],
  },
  fr: {
    code: "fr",
    name: "Français",
    htmlLang: "fr",
    badge: "🚀 Gratuit · Sans Connexion · Transcriptions Illimitées",
    titleLine1: "Générateur Gratuit de",
    titleLine2: "Transcriptions YouTube",
    subtitlePrefix: "Convertissez ",
    subtitleLinkText: "YouTube en transcription",
    subtitleSuffix:
      " en quelques secondes — copiez, recherchez et téléchargez le texte de toute vidéo publique YouTube. Parfait pour les étudiants, créateurs, chercheurs, marketeurs et développeurs qui ont besoin de transcriptions précises pour le SEO, l'IA, l'apprentissage et la création de contenu.",
    chips: ["Résultats Instantanés", "Plus de 100 Langues", "TXT · SRT · Copier", "Prêt pour l'IA", "Sans Inscription"],
    metaTitle: "Générateur Gratuit de Transcriptions YouTube",
    metaDescription:
      "Convertissez toute vidéo publique YouTube en transcription en quelques secondes. Copiez, recherchez et téléchargez le texte — gratuit, sans inscription.",
    faqTitle: "Questions Fréquentes",
    faqDescription: "Comment fonctionne notre générateur gratuit de transcriptions YouTube.",
    faqs: [
      {
        q: "Ce générateur de transcriptions YouTube est-il gratuit ?",
        a: "Oui. Notre générateur de transcriptions YouTube est entièrement gratuit. Aucun abonnement, frais cachés ou compte requis.",
      },
      {
        q: "Comment obtenir la transcription d'une vidéo YouTube ?",
        a: "Il suffit de coller l'URL de toute vidéo publique YouTube dans le champ de saisie et de cliquer sur Générer. La transcription sera extraite en quelques secondes, vous permettant de la copier, la rechercher ou la télécharger.",
      },
      {
        q: "Puis-je télécharger les transcriptions YouTube ?",
        a: "Oui. Vous pouvez copier la transcription ou la télécharger en tant que fichier TXT simple, TXT horodaté, ou sous-titres SRT pour l'étude, la création de contenu, la recherche ou les flux de travail IA.",
      },
      {
        q: "Cela fonctionne-t-il avec les YouTube Shorts ?",
        a: "Oui, tant que la vidéo dispose de sous-titres ou de transcriptions disponibles.",
      },
      {
        q: "Quelles langues sont prises en charge ?",
        a: "L'outil prend en charge plus de 100 langues, selon les sous-titres disponibles pour la vidéo YouTube originale.",
      },
      {
        q: "Dois-je installer un logiciel ?",
        a: "Non. Tout fonctionne directement dans votre navigateur. Aucune extension, téléchargement ou installation de logiciel n'est nécessaire.",
      },
    ],
  },
  de: {
    code: "de",
    name: "Deutsch",
    htmlLang: "de",
    badge: "🚀 Kostenlos · Ohne Anmeldung · Unbegrenzte Transkripte",
    titleLine1: "Kostenloser",
    titleLine2: "YouTube-Transkript-Generator",
    subtitlePrefix: "Konvertiere ",
    subtitleLinkText: "YouTube in Transkript",
    subtitleSuffix:
      " in Sekunden — kopiere, durchsuche und lade den Text jedes öffentlichen YouTube-Videos herunter. Perfekt für Studenten, Creator, Forscher, Marketer und Entwickler, die präzise Video-Transkripte für SEO, KI, Lernen und Content-Erstellung benötigen.",
    chips: ["Sofortige Ergebnisse", "Über 100 Sprachen", "TXT · SRT · Kopieren", "KI-Bereit", "Ohne Anmeldung"],
    metaTitle: "Kostenloser YouTube-Transkript-Generator",
    metaDescription:
      "Konvertiere jedes öffentliche YouTube-Video in Sekunden in ein Transkript. Kopieren, durchsuchen und Text herunterladen — kostenlos, ohne Anmeldung.",
    faqTitle: "Häufig Gestellte Fragen",
    faqDescription: "So funktioniert unser kostenloser YouTube-Transkript-Generator.",
    faqs: [
      {
        q: "Ist dieser YouTube-Transkript-Generator kostenlos?",
        a: "Ja. Unser YouTube-Transkript-Generator ist völlig kostenlos. Es gibt keine Abonnements, versteckten Gebühren oder Kontopflicht.",
      },
      {
        q: "Wie erhalte ich ein Transkript eines YouTube-Videos?",
        a: "Füge einfach die URL eines öffentlichen YouTube-Videos in das Eingabefeld ein und klicke auf Generieren. Das Transkript wird in Sekunden extrahiert, sodass du es kopieren, durchsuchen oder herunterladen kannst.",
      },
      {
        q: "Kann ich YouTube-Transkripte herunterladen?",
        a: "Ja. Du kannst das Transkript kopieren oder als einfache TXT-Datei, TXT mit Zeitstempeln oder SRT-Untertitel für Lernen, Content-Erstellung, Recherche oder KI-Workflows herunterladen.",
      },
      {
        q: "Funktioniert es mit YouTube Shorts?",
        a: "Ja, solange das Video über verfügbare Untertitel oder Transkripte verfügt.",
      },
      {
        q: "Welche Sprachen werden unterstützt?",
        a: "Das Tool unterstützt über 100 Sprachen, abhängig von den verfügbaren Untertiteln des ursprünglichen YouTube-Videos.",
      },
      {
        q: "Muss ich Software installieren?",
        a: "Nein. Alles funktioniert direkt im Browser. Keine Erweiterungen, Downloads oder Software-Installation erforderlich.",
      },
    ],
  },
  hi: {
    code: "hi",
    name: "हिन्दी",
    htmlLang: "hi",
    badge: "🚀 मुफ़्त · बिना लॉगिन · असीमित ट्रांसक्रिप्ट",
    titleLine1: "मुफ़्त",
    titleLine2: "YouTube ट्रांसक्रिप्ट जेनरेटर",
    subtitlePrefix: "",
    subtitleLinkText: "YouTube को ट्रांसक्रिप्ट में बदलें",
    subtitleSuffix:
      " कुछ ही सेकंड में — किसी भी सार्वजनिक YouTube वीडियो का टेक्स्ट कॉपी करें, खोजें और डाउनलोड करें। छात्रों, क्रिएटर्स, शोधकर्ताओं, मार्केटर्स और डेवलपर्स के लिए बिल्कुल सही, जिन्हें SEO, AI, सीखने और कंटेंट बनाने के लिए सटीक वीडियो ट्रांसक्रिप्ट चाहिए।",
    chips: ["तुरंत परिणाम", "100+ भाषाएं", "TXT · SRT · कॉपी", "AI के लिए तैयार", "बिना साइन-अप"],
    metaTitle: "मुफ़्त YouTube ट्रांसक्रिप्ट जेनरेटर",
    metaDescription:
      "किसी भी सार्वजनिक YouTube वीडियो को कुछ ही सेकंड में ट्रांसक्रिप्ट में बदलें। टेक्स्ट कॉपी करें, खोजें और डाउनलोड करें — मुफ़्त, बिना साइन-अप के।",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faqDescription: "हमारा मुफ़्त YouTube ट्रांसक्रिप्ट जेनरेटर कैसे काम करता है।",
    faqs: [
      {
        q: "क्या यह YouTube ट्रांसक्रिप्ट जेनरेटर मुफ़्त है?",
        a: "हां। हमारा YouTube ट्रांसक्रिप्ट जेनरेटर पूरी तरह से मुफ़्त है। कोई सब्सक्रिप्शन, छिपी हुई फीस या अकाउंट की आवश्यकता नहीं है।",
      },
      {
        q: "मुझे YouTube वीडियो का ट्रांसक्रिप्ट कैसे मिलेगा?",
        a: "बस किसी भी सार्वजनिक YouTube वीडियो का URL इनपुट बॉक्स में पेस्ट करें और जेनरेट पर क्लिक करें। ट्रांसक्रिप्ट कुछ ही सेकंड में निकाला जाएगा, जिससे आप इसे कॉपी, खोज या डाउनलोड कर सकते हैं।",
      },
      {
        q: "क्या मैं YouTube ट्रांसक्रिप्ट डाउनलोड कर सकता हूं?",
        a: "हां। आप ट्रांसक्रिप्ट कॉपी कर सकते हैं, या इसे सादे TXT फ़ाइल, टाइमस्टैम्प वाली TXT फ़ाइल, या SRT सबटाइटल के रूप में डाउनलोड कर सकते हैं — पढ़ाई, कंटेंट बनाने, शोध या AI वर्कफ़्लो के लिए।",
      },
      {
        q: "क्या यह YouTube Shorts के साथ काम करता है?",
        a: "हां, जब तक वीडियो में सबटाइटल या ट्रांसक्रिप्ट उपलब्ध हैं।",
      },
      {
        q: "कौन सी भाषाएं समर्थित हैं?",
        a: "यह टूल 100 से अधिक भाषाओं का समर्थन करता है, यह मूल YouTube वीडियो के लिए उपलब्ध सबटाइटल पर निर्भर करता है।",
      },
      {
        q: "क्या मुझे कोई सॉफ़्टवेयर इंस्टॉल करने की आवश्यकता है?",
        a: "नहीं। सब कुछ सीधे आपके ब्राउज़र में काम करता है। किसी एक्सटेंशन, डाउनलोड या सॉफ़्टवेयर इंस्टॉलेशन की आवश्यकता नहीं है।",
      },
    ],
  },
};

export const homepageLocaleCodes = Object.keys(homepageLocales);
