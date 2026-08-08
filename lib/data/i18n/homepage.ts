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
  featuresLabel: string;
  featuresHeading: string;
  featuresSubheading: string;
  features: { title: string; description: string }[];
  howItWorksLabel: string;
  howItWorksHeading: string;
  howItWorksSubheading: string;
  howItWorksSteps: { title: string; description: string }[];
  howToName: string;
  howToDescription: string;
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
    featuresLabel: "Características",
    featuresHeading: "Todo lo que Necesitas para Generar Transcripciones de YouTube",
    featuresSubheading:
      "Nuestro generador gratuito de transcripciones de YouTube ayuda a creadores, estudiantes, investigadores, especialistas en marketing y desarrolladores a generar, copiar y descargar transcripciones de videos de YouTube en pocos segundos.",
    features: [
      {
        title: "Generación Instantánea de Transcripciones",
        description:
          "Genera transcripciones precisas de cualquier video público de YouTube en segundos, sin esperas ni configuraciones complicadas.",
      },
      {
        title: "Compatible con más de 100 Idiomas",
        description:
          "Extrae transcripciones de videos de YouTube en más de 100 idiomas, incluyendo subtítulos creados manualmente y generados automáticamente.",
      },
      {
        title: "Copia y Descarga Transcripciones",
        description:
          "Copia la transcripción al instante o descárgala como archivo TXT para estudiar, hacer SEO, investigar, documentar o crear contenido.",
      },
      {
        title: "Busca en Videos Largos más Rápido",
        description:
          "Encuentra rápidamente información importante dentro de videos largos de YouTube sin ver cada minuto.",
      },
      {
        title: "Perfecto para Flujos de Trabajo de IA",
        description:
          "Usa las transcripciones de YouTube con ChatGPT, Claude, Gemini y otras herramientas de IA para resumir, tomar notas y generar contenido.",
      },
      {
        title: "100% Gratis y Sin Registro",
        description:
          "Sin registro, suscripciones ni instalación de software. Simplemente pega la URL de YouTube y genera la transcripción al instante.",
      },
    ],
    howItWorksLabel: "Cómo Funciona",
    howItWorksHeading: "Genera una Transcripción de YouTube en 3 Pasos Simples",
    howItWorksSubheading:
      "Pega el enlace de un video de YouTube, genera la transcripción al instante y cópiala o descárgala gratis. No requiere registro ni instalación de software.",
    howItWorksSteps: [
      {
        title: "Pega la URL del Video de YouTube",
        description:
          "Copia la URL de cualquier video público de YouTube y pégala en nuestro generador gratuito de transcripciones.",
      },
      {
        title: "Genera la Transcripción",
        description:
          "Nuestra herramienta extrae al instante la transcripción, los subtítulos y la información del video, facilitando su lectura, búsqueda y copia.",
      },
      {
        title: "Copia o Descarga",
        description:
          "Copia la transcripción o descárgala como archivo TXT para estudiar, hacer SEO, generar contenido con IA, investigar, documentar o crear contenido.",
      },
    ],
    howToName: "Cómo Generar una Transcripción de YouTube",
    howToDescription:
      "Pega el enlace de un video de YouTube, genera la transcripción al instante y cópiala o descárgala gratis.",
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
    featuresLabel: "Recursos",
    featuresHeading: "Tudo o que Você Precisa para Gerar Transcrições do YouTube",
    featuresSubheading:
      "Nosso gerador gratuito de transcrições do YouTube ajuda criadores, estudantes, pesquisadores, profissionais de marketing e desenvolvedores a gerar, copiar e baixar transcrições de vídeos do YouTube em poucos segundos.",
    features: [
      {
        title: "Geração Instantânea de Transcrições",
        description:
          "Gere transcrições precisas de qualquer vídeo público do YouTube em segundos, sem espera ou configuração complicada.",
      },
      {
        title: "Suporta mais de 100 Idiomas",
        description:
          "Extraia transcrições de vídeos do YouTube em mais de 100 idiomas, incluindo legendas criadas manualmente e geradas automaticamente.",
      },
      {
        title: "Copie e Baixe Transcrições",
        description:
          "Copie a transcrição instantaneamente ou baixe-a como arquivo TXT para estudar, SEO, pesquisa, documentação ou criação de conteúdo.",
      },
      {
        title: "Pesquise Vídeos Longos mais Rápido",
        description:
          "Encontre rapidamente informações importantes dentro de vídeos longos do YouTube sem assistir a cada minuto.",
      },
      {
        title: "Perfeito para Fluxos de Trabalho de IA",
        description:
          "Use transcrições do YouTube com ChatGPT, Claude, Gemini e outras ferramentas de IA para resumir, fazer anotações e gerar conteúdo.",
      },
      {
        title: "100% Grátis e Sem Cadastro",
        description:
          "Sem registro, assinaturas ou instalação de software. Basta colar a URL do YouTube e gerar a transcrição instantaneamente.",
      },
    ],
    howItWorksLabel: "Como Funciona",
    howItWorksHeading: "Gere uma Transcrição do YouTube em 3 Passos Simples",
    howItWorksSubheading:
      "Cole o link de um vídeo do YouTube, gere a transcrição instantaneamente e copie ou baixe gratuitamente. Não é necessário cadastro ou instalação de software.",
    howItWorksSteps: [
      {
        title: "Cole a URL do Vídeo do YouTube",
        description:
          "Copie a URL de qualquer vídeo público do YouTube e cole em nosso gerador gratuito de transcrições.",
      },
      {
        title: "Gere a Transcrição",
        description:
          "Nossa ferramenta extrai instantaneamente a transcrição, legendas e informações do vídeo, facilitando a leitura, pesquisa e cópia.",
      },
      {
        title: "Copie ou Baixe",
        description:
          "Copie a transcrição ou baixe-a como arquivo TXT para estudar, SEO, prompts de IA, pesquisa, documentação ou criação de conteúdo.",
      },
    ],
    howToName: "Como Gerar uma Transcrição do YouTube",
    howToDescription:
      "Cole o link de um vídeo do YouTube, gere a transcrição instantaneamente e copie ou baixe gratuitamente.",
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
    featuresLabel: "Fonctionnalités",
    featuresHeading: "Tout ce Dont Vous Avez Besoin pour Générer des Transcriptions YouTube",
    featuresSubheading:
      "Notre générateur gratuit de transcriptions YouTube aide les créateurs, étudiants, chercheurs, marketeurs et développeurs à générer, copier et télécharger des transcriptions de vidéos YouTube en quelques secondes.",
    features: [
      {
        title: "Génération Instantanée de Transcriptions",
        description:
          "Générez des transcriptions précises de toute vidéo publique YouTube en quelques secondes, sans attente ni configuration compliquée.",
      },
      {
        title: "Compatible avec plus de 100 Langues",
        description:
          "Extrayez des transcriptions de vidéos YouTube dans plus de 100 langues, y compris les sous-titres créés manuellement et générés automatiquement.",
      },
      {
        title: "Copiez et Téléchargez les Transcriptions",
        description:
          "Copiez la transcription instantanément ou téléchargez-la en fichier TXT pour étudier, le SEO, la recherche, la documentation ou la création de contenu.",
      },
      {
        title: "Recherchez plus Vite dans les Longues Vidéos",
        description:
          "Trouvez rapidement des informations importantes dans de longues vidéos YouTube sans regarder chaque minute.",
      },
      {
        title: "Parfait pour les Flux de Travail IA",
        description:
          "Utilisez les transcriptions YouTube avec ChatGPT, Claude, Gemini et d'autres outils IA pour résumer, prendre des notes et générer du contenu.",
      },
      {
        title: "100% Gratuit et Sans Inscription",
        description:
          "Aucune inscription, abonnement ou installation de logiciel requis. Collez simplement l'URL YouTube et générez la transcription instantanément.",
      },
    ],
    howItWorksLabel: "Comment Ça Marche",
    howItWorksHeading: "Générez une Transcription YouTube en 3 Étapes Simples",
    howItWorksSubheading:
      "Collez le lien d'une vidéo YouTube, générez la transcription instantanément et copiez-la ou téléchargez-la gratuitement. Aucune inscription ni installation de logiciel requise.",
    howItWorksSteps: [
      {
        title: "Collez l'URL de la Vidéo YouTube",
        description:
          "Copiez l'URL de toute vidéo publique YouTube et collez-la dans notre générateur gratuit de transcriptions.",
      },
      {
        title: "Générez la Transcription",
        description:
          "Notre outil extrait instantanément la transcription, les sous-titres et les informations de la vidéo, facilitant la lecture, la recherche et la copie.",
      },
      {
        title: "Copiez ou Téléchargez",
        description:
          "Copiez la transcription ou téléchargez-la en fichier TXT pour étudier, le SEO, les prompts IA, la recherche, la documentation ou la création de contenu.",
      },
    ],
    howToName: "Comment Générer une Transcription YouTube",
    howToDescription:
      "Collez le lien d'une vidéo YouTube, générez la transcription instantanément et copiez-la ou téléchargez-la gratuitement.",
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
    featuresLabel: "Funktionen",
    featuresHeading: "Alles, was du brauchst, um YouTube-Transkripte zu Erstellen",
    featuresSubheading:
      "Unser kostenloser YouTube-Transkript-Generator hilft Creators, Studenten, Forschern, Marketern und Entwicklern, in wenigen Sekunden Transkripte von YouTube-Videos zu erstellen, zu kopieren und herunterzuladen.",
    features: [
      {
        title: "Sofortige Transkript-Erstellung",
        description:
          "Erstelle präzise Transkripte jedes öffentlichen YouTube-Videos in Sekunden, ohne Wartezeit oder komplizierte Einrichtung.",
      },
      {
        title: "Unterstützt über 100 Sprachen",
        description:
          "Extrahiere Transkripte von YouTube-Videos in über 100 Sprachen, einschließlich manuell erstellter und automatisch generierter Untertitel.",
      },
      {
        title: "Transkripte Kopieren und Herunterladen",
        description:
          "Kopiere das Transkript sofort oder lade es als TXT-Datei herunter — zum Lernen, für SEO, Recherche, Dokumentation oder Content-Erstellung.",
      },
      {
        title: "Lange Videos Schneller Durchsuchen",
        description:
          "Finde schnell wichtige Informationen in langen YouTube-Videos, ohne jede Minute anzusehen.",
      },
      {
        title: "Perfekt für KI-Workflows",
        description:
          "Nutze YouTube-Transkripte mit ChatGPT, Claude, Gemini und anderen KI-Tools zum Zusammenfassen, Notieren und Erstellen von Inhalten.",
      },
      {
        title: "100% Kostenlos und Ohne Anmeldung",
        description:
          "Keine Registrierung, Abonnements oder Softwareinstallation erforderlich. Füge einfach die YouTube-URL ein und erstelle sofort das Transkript.",
      },
    ],
    howItWorksLabel: "So Funktioniert's",
    howItWorksHeading: "Erstelle ein YouTube-Transkript in 3 Einfachen Schritten",
    howItWorksSubheading:
      "Füge einen YouTube-Video-Link ein, erstelle sofort das Transkript und kopiere oder lade es kostenlos herunter. Keine Registrierung oder Softwareinstallation erforderlich.",
    howItWorksSteps: [
      {
        title: "Füge deine YouTube-Video-URL ein",
        description:
          "Kopiere die URL eines öffentlichen YouTube-Videos und füge sie in unseren kostenlosen YouTube-Transkript-Generator ein.",
      },
      {
        title: "Erstelle das Transkript",
        description:
          "Unser Tool extrahiert sofort das Transkript, die Untertitel und die Videoinformationen — leicht zu lesen, durchsuchen und kopieren.",
      },
      {
        title: "Kopieren oder Herunterladen",
        description:
          "Kopiere das Transkript oder lade es als TXT-Datei herunter — zum Lernen, für SEO, KI-Prompts, Recherche, Dokumentation oder Content-Erstellung.",
      },
    ],
    howToName: "So Erstellst du ein YouTube-Transkript",
    howToDescription:
      "Füge einen YouTube-Video-Link ein, erstelle sofort das Transkript und kopiere oder lade es kostenlos herunter.",
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
    featuresLabel: "विशेषताएं",
    featuresHeading: "YouTube ट्रांसक्रिप्ट जेनरेट करने के लिए आपको जो कुछ चाहिए",
    featuresSubheading:
      "हमारा मुफ़्त YouTube ट्रांसक्रिप्ट जेनरेटर क्रिएटर्स, छात्रों, शोधकर्ताओं, मार्केटर्स और डेवलपर्स को कुछ ही सेकंड में YouTube वीडियो से ट्रांसक्रिप्ट जेनरेट करने, कॉपी करने और डाउनलोड करने में मदद करता है।",
    features: [
      {
        title: "तुरंत ट्रांसक्रिप्ट जेनरेशन",
        description:
          "बिना किसी इंतज़ार या जटिल सेटअप के, किसी भी सार्वजनिक YouTube वीडियो का सटीक ट्रांसक्रिप्ट कुछ ही सेकंड में जेनरेट करें।",
      },
      {
        title: "100+ भाषाओं का समर्थन",
        description:
          "मैन्युअल रूप से बनाए गए और ऑटो-जेनरेटेड दोनों तरह के सबटाइटल सहित, 100 से अधिक भाषाओं में YouTube वीडियो का ट्रांसक्रिप्ट निकालें।",
      },
      {
        title: "ट्रांसक्रिप्ट कॉपी और डाउनलोड करें",
        description:
          "ट्रांसक्रिप्ट को तुरंत कॉपी करें या पढ़ाई, SEO, रिसर्च, दस्तावेज़ीकरण या कंटेंट बनाने के लिए TXT फ़ाइल के रूप में डाउनलोड करें।",
      },
      {
        title: "लंबे वीडियो को तेज़ी से खोजें",
        description:
          "हर मिनट देखे बिना, लंबे YouTube वीडियो के अंदर महत्वपूर्ण जानकारी जल्दी से खोजें।",
      },
      {
        title: "AI वर्कफ़्लो के लिए बिल्कुल सही",
        description:
          "सारांश बनाने, नोट्स लेने और कंटेंट जेनरेट करने के लिए YouTube ट्रांसक्रिप्ट को ChatGPT, Claude, Gemini और अन्य AI टूल्स के साथ उपयोग करें।",
      },
      {
        title: "100% मुफ़्त और बिना साइन-अप",
        description:
          "कोई रजिस्ट्रेशन, सब्सक्रिप्शन या सॉफ़्टवेयर इंस्टॉलेशन की आवश्यकता नहीं। बस YouTube URL पेस्ट करें और तुरंत ट्रांसक्रिप्ट जेनरेट करें।",
      },
    ],
    howItWorksLabel: "यह कैसे काम करता है",
    howItWorksHeading: "3 आसान चरणों में YouTube ट्रांसक्रिप्ट जेनरेट करें",
    howItWorksSubheading:
      "YouTube वीडियो का लिंक पेस्ट करें, तुरंत ट्रांसक्रिप्ट जेनरेट करें और इसे मुफ़्त में कॉपी या डाउनलोड करें। किसी रजिस्ट्रेशन या सॉफ़्टवेयर इंस्टॉलेशन की आवश्यकता नहीं।",
    howItWorksSteps: [
      {
        title: "अपना YouTube वीडियो URL पेस्ट करें",
        description:
          "किसी भी सार्वजनिक YouTube वीडियो का URL कॉपी करें और इसे हमारे मुफ़्त YouTube ट्रांसक्रिप्ट जेनरेटर में पेस्ट करें।",
      },
      {
        title: "ट्रांसक्रिप्ट जेनरेट करें",
        description:
          "हमारा टूल तुरंत ट्रांसक्रिप्ट, सबटाइटल और वीडियो जानकारी निकालता है, जिससे पढ़ना, खोजना और कॉपी करना आसान हो जाता है।",
      },
      {
        title: "कॉपी करें या डाउनलोड करें",
        description:
          "ट्रांसक्रिप्ट कॉपी करें या पढ़ाई, SEO, AI प्रॉम्प्ट, रिसर्च, दस्तावेज़ीकरण या कंटेंट बनाने के लिए TXT फ़ाइल के रूप में डाउनलोड करें।",
      },
    ],
    howToName: "YouTube ट्रांसक्रिप्ट कैसे जेनरेट करें",
    howToDescription:
      "YouTube वीडियो का लिंक पेस्ट करें, तुरंत ट्रांसक्रिप्ट जेनरेट करें और इसे मुफ़्त में कॉपी या डाउनलोड करें।",
  },
};

export const homepageLocaleCodes = Object.keys(homepageLocales);
