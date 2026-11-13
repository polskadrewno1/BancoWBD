(() => {
  const languages = {
    pt: ["Português", "pt-PT"], de: ["Deutsch", "de-DE"], pl: ["Polski", "pl-PL"],
    es: ["Español", "es-ES"], it: ["Italiano", "it-IT"], el: ["Ελληνικά", "el-GR"],
    sk: ["Slovenčina", "sk-SK"], hr: ["Hrvatski", "hr-HR"], fr: ["Français", "fr-FR"]
  };
  const translations = {
    de: {
      "Início":"Startseite","Serviços":"Dienstleistungen","Financiamento":"Finanzierung","Área de cliente":"Kundenbereich","Contacto":"Kontakt",
      "SOLUÇÕES DE FINANCIAMENTO":"FINANZIERUNGSLÖSUNGEN","O futuro financeiro começa com uma nova experiência.":"Die finanzielle Zukunft beginnt mit einer neuen Erfahrung.",
      "Solicitar um empréstimo":"Finanzierung beantragen","Entrar na minha conta":"Bei meinem Konto anmelden","Conheça os nossos serviços":"Entdecken Sie unsere Dienstleistungen",
      "Fale connosco":"Kontaktieren Sie uns","Página inicial":"Startseite","CRIAR UMA CONTA":"KONTO ERSTELLEN","INICIAR SESSÃO":"ANMELDEN",
      "Criar uma conta":"Konto erstellen","Registe-se para aceder à sua área pessoal.":"Registrieren Sie sich, um auf Ihren persönlichen Bereich zuzugreifen.",
      "Nome completo":"Vollständiger Name","Número de WhatsApp":"WhatsApp-Nummer","Endereço de e-mail":"E-Mail-Adresse","Criar palavra-passe":"Passwort erstellen",
      "Criar conta":"Konto erstellen","Voltar":"Zurück","Iniciar sessão":"Anmelden","Já tem uma conta? Entre na sua área pessoal.":"Sie haben bereits ein Konto? Melden Sie sich an.",
      "Palavra-passe":"Passwort","Entrar":"Anmelden","Esqueceu-se da palavra-passe?":"Passwort vergessen?","Recuperar palavra-passe":"Passwort zurücksetzen",
      "Enviar link de recuperação":"Link zum Zurücksetzen senden","Criar nova palavra-passe":"Neues Passwort erstellen","Nova palavra-passe":"Neues Passwort",
      "Confirmar palavra-passe":"Passwort bestätigen","Guardar nova palavra-passe":"Neues Passwort speichern","Terminar sessão":"Abmelden",
      "Atualizar pedidos":"Anfragen aktualisieren","Pedido de financiamento":"Finanzierungsantrag","Enviar candidatura":"Antrag senden",
      "Informações do requerente":"Angaben zum Antragsteller","Dados bancários":"Bankverbindung","País":"Land","Cidade":"Stadt",
      "Profissão":"Beruf","Montante pretendido (€)":"Gewünschter Betrag (€)","Prazo de reembolso (meses)":"Rückzahlungsfrist (Monate)",
      "Finalidade do financiamento":"Verwendungszweck der Finanzierung","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Name der Bank"
    },
    pl: {
      "Início":"Strona główna","Serviços":"Usługi","Financiamento":"Finansowanie","Área de cliente":"Strefa klienta","Contacto":"Kontakt",
      "SOLUÇÕES DE FINANCIAMENTO":"ROZWIĄZANIA FINANSOWE","O futuro financeiro começa com uma nova experiência.":"Finansowa przyszłość zaczyna się od nowego doświadczenia.",
      "Solicitar um empréstimo":"Złóż wniosek o finansowanie","Entrar na minha conta":"Zaloguj się na konto","Conheça os nossos serviços":"Poznaj nasze usługi",
      "Fale connosco":"Skontaktuj się z nami","Página inicial":"Strona główna","CRIAR UMA CONTA":"UTWÓRZ KONTO","INICIAR SESSÃO":"ZALOGUJ SIĘ",
      "Criar uma conta":"Utwórz konto","Registe-se para aceder à sua área pessoal.":"Zarejestruj się, aby uzyskać dostęp do swojej strefy klienta.",
      "Nome completo":"Imię i nazwisko","Número de WhatsApp":"Numer WhatsApp","Endereço de e-mail":"Adres e-mail","Criar palavra-passe":"Utwórz hasło",
      "Criar conta":"Utwórz konto","Voltar":"Wstecz","Iniciar sessão":"Zaloguj się","Já tem uma conta? Entre na sua área pessoal.":"Masz już konto? Zaloguj się.",
      "Palavra-passe":"Hasło","Entrar":"Zaloguj","Esqueceu-se da palavra-passe?":"Nie pamiętasz hasła?","Recuperar palavra-passe":"Odzyskaj hasło",
      "Enviar link de recuperação":"Wyślij link do resetowania","Criar nova palavra-passe":"Utwórz nowe hasło","Nova palavra-passe":"Nowe hasło",
      "Confirmar palavra-passe":"Potwierdź hasło","Guardar nova palavra-passe":"Zapisz nowe hasło","Terminar sessão":"Wyloguj się",
      "Atualizar pedidos":"Odśwież wnioski","Pedido de financiamento":"Wniosek o finansowanie","Enviar candidatura":"Wyślij wniosek",
      "Informações do requerente":"Dane wnioskodawcy","Dados bancários":"Dane bankowe","País":"Kraj","Cidade":"Miasto",
      "Profissão":"Zawód","Montante pretendido (€)":"Wnioskowana kwota (€)","Prazo de reembolso (meses)":"Okres spłaty (miesiące)",
      "Finalidade do financiamento":"Cel finansowania","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Nazwa banku"
    },
    es: {
      "Início":"Inicio","Serviços":"Servicios","Financiamento":"Financiación","Área de cliente":"Área de cliente","Contacto":"Contacto",
      "SOLUÇÕES DE FINANCIAMENTO":"SOLUCIONES DE FINANCIACIÓN","O futuro financeiro começa com uma nova experiência.":"El futuro financiero comienza con una nueva experiencia.",
      "Solicitar um empréstimo":"Solicitar financiación","Entrar na minha conta":"Acceder a mi cuenta","Conheça os nossos serviços":"Conozca nuestros servicios",
      "Fale connosco":"Contacte con nosotros","Página inicial":"Página de inicio","CRIAR UMA CONTA":"CREAR UNA CUENTA","INICIAR SESSÃO":"INICIAR SESIÓN",
      "Criar uma conta":"Crear una cuenta","Registe-se para aceder à sua área pessoal.":"Regístrese para acceder a su área personal.",
      "Nome completo":"Nombre completo","Número de WhatsApp":"Número de WhatsApp","Endereço de e-mail":"Correo electrónico","Criar palavra-passe":"Crear contraseña",
      "Criar conta":"Crear cuenta","Voltar":"Volver","Iniciar sessão":"Iniciar sesión","Já tem uma conta? Entre na sua área pessoal.":"¿Ya tiene una cuenta? Acceda a su área personal.",
      "Palavra-passe":"Contraseña","Entrar":"Entrar","Esqueceu-se da palavra-passe?":"¿Olvidó su contraseña?","Recuperar palavra-passe":"Recuperar contraseña",
      "Enviar link de recuperação":"Enviar enlace de recuperación","Criar nova palavra-passe":"Crear nueva contraseña","Nova palavra-passe":"Nueva contraseña",
      "Confirmar palavra-passe":"Confirmar contraseña","Guardar nova palavra-passe":"Guardar nueva contraseña","Terminar sessão":"Cerrar sesión",
      "Atualizar pedidos":"Actualizar solicitudes","Pedido de financiamento":"Solicitud de financiación","Enviar candidatura":"Enviar solicitud",
      "Informações do requerente":"Información del solicitante","Dados bancários":"Datos bancarios","País":"País","Cidade":"Ciudad",
      "Profissão":"Profesión","Montante pretendido (€)":"Importe solicitado (€)","Prazo de reembolso (meses)":"Plazo de devolución (meses)",
      "Finalidade do financiamento":"Finalidad de la financiación","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Nombre del banco"
    },
    it: {
      "Início":"Home","Serviços":"Servizi","Financiamento":"Finanziamento","Área de cliente":"Area clienti","Contacto":"Contatti",
      "SOLUÇÕES DE FINANCIAMENTO":"SOLUZIONI DI FINANZIAMENTO","O futuro financeiro começa com uma nova experiência.":"Il futuro finanziario inizia con una nuova esperienza.",
      "Solicitar um empréstimo":"Richiedere un finanziamento","Entrar na minha conta":"Accedi al mio account","Conheça os nossos serviços":"Scopri i nostri servizi",
      "Fale connosco":"Contattaci","Página inicial":"Pagina iniziale","CRIAR UMA CONTA":"CREA UN ACCOUNT","INICIAR SESSÃO":"ACCEDI",
      "Criar uma conta":"Crea un account","Registe-se para aceder à sua área pessoal.":"Registrati per accedere alla tua area personale.",
      "Nome completo":"Nome completo","Número de WhatsApp":"Numero WhatsApp","Endereço de e-mail":"Indirizzo e-mail","Criar palavra-passe":"Crea password",
      "Criar conta":"Crea account","Voltar":"Indietro","Iniciar sessão":"Accedi","Já tem uma conta? Entre na sua área pessoal.":"Hai già un account? Accedi alla tua area personale.",
      "Palavra-passe":"Password","Entrar":"Entra","Esqueceu-se da palavra-passe?":"Hai dimenticato la password?","Recuperar palavra-passe":"Recupera password",
      "Enviar link de recuperação":"Invia link di recupero","Criar nova palavra-passe":"Crea una nuova password","Nova palavra-passe":"Nuova password",
      "Confirmar palavra-passe":"Conferma password","Guardar nova palavra-passe":"Salva nuova password","Terminar sessão":"Esci",
      "Atualizar pedidos":"Aggiorna richieste","Pedido de financiamento":"Richiesta di finanziamento","Enviar candidatura":"Invia richiesta",
      "Informações do requerente":"Informazioni del richiedente","Dados bancários":"Dati bancari","País":"Paese","Cidade":"Città",
      "Profissão":"Professione","Montante pretendido (€)":"Importo richiesto (€)","Prazo de reembolso (meses)":"Durata del rimborso (mesi)",
      "Finalidade do financiamento":"Finalità del finanziamento","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Nome della banca"
    },
    el: {
      "Início":"Αρχική","Serviços":"Υπηρεσίες","Financiamento":"Χρηματοδότηση","Área de cliente":"Περιοχή πελατών","Contacto":"Επικοινωνία",
      "SOLUÇÕES DE FINANCIAMENTO":"ΛΥΣΕΙΣ ΧΡΗΜΑΤΟΔΟΤΗΣΗΣ","O futuro financeiro começa com uma nova experiência.":"Το οικονομικό μέλλον ξεκινά με μια νέα εμπειρία.",
      "Solicitar um empréstimo":"Αίτηση χρηματοδότησης","Entrar na minha conta":"Σύνδεση στον λογαριασμό μου","Conheça os nossos serviços":"Γνωρίστε τις υπηρεσίες μας",
      "Fale connosco":"Επικοινωνήστε μαζί μας","Página inicial":"Αρχική σελίδα","CRIAR UMA CONTA":"ΔΗΜΙΟΥΡΓΙΑ ΛΟΓΑΡΙΑΣΜΟΥ","INICIAR SESSÃO":"ΣΥΝΔΕΣΗ",
      "Criar uma conta":"Δημιουργία λογαριασμού","Registe-se para aceder à sua área pessoal.":"Εγγραφείτε για πρόσβαση στον προσωπικό σας χώρο.",
      "Nome completo":"Ονοματεπώνυμο","Número de WhatsApp":"Αριθμός WhatsApp","Endereço de e-mail":"Διεύθυνση email","Criar palavra-passe":"Δημιουργία κωδικού",
      "Criar conta":"Δημιουργία λογαριασμού","Voltar":"Πίσω","Iniciar sessão":"Σύνδεση","Já tem uma conta? Entre na sua área pessoal.":"Έχετε ήδη λογαριασμό; Συνδεθείτε.",
      "Palavra-passe":"Κωδικός πρόσβασης","Entrar":"Είσοδος","Esqueceu-se da palavra-passe?":"Ξεχάσατε τον κωδικό;","Recuperar palavra-passe":"Ανάκτηση κωδικού",
      "Enviar link de recuperação":"Αποστολή συνδέσμου ανάκτησης","Criar nova palavra-passe":"Δημιουργία νέου κωδικού","Nova palavra-passe":"Νέος κωδικός",
      "Confirmar palavra-passe":"Επιβεβαίωση κωδικού","Guardar nova palavra-passe":"Αποθήκευση νέου κωδικού","Terminar sessão":"Αποσύνδεση",
      "Atualizar pedidos":"Ανανέωση αιτημάτων","Pedido de financiamento":"Αίτηση χρηματοδότησης","Enviar candidatura":"Υποβολή αίτησης",
      "Informações do requerente":"Στοιχεία αιτούντος","Dados bancários":"Τραπεζικά στοιχεία","País":"Χώρα","Cidade":"Πόλη",
      "Profissão":"Επάγγελμα","Montante pretendido (€)":"Ζητούμενο ποσό (€)","Prazo de reembolso (meses)":"Περίοδος αποπληρωμής (μήνες)",
      "Finalidade do financiamento":"Σκοπός χρηματοδότησης","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Όνομα τράπεζας"
    },
    sk: {
      "Início":"Domov","Serviços":"Služby","Financiamento":"Financovanie","Área de cliente":"Klientska zóna","Contacto":"Kontakt",
      "SOLUÇÕES DE FINANCIAMENTO":"RIEŠENIA FINANCOVANIA","O futuro financeiro começa com uma nova experiência.":"Finančná budúcnosť sa začína novou skúsenosťou.",
      "Solicitar um empréstimo":"Požiadať o financovanie","Entrar na minha conta":"Prihlásiť sa do účtu","Conheça os nossos serviços":"Spoznajte naše služby",
      "Fale connosco":"Kontaktujte nás","Página inicial":"Domovská stránka","CRIAR UMA CONTA":"VYTVORIŤ ÚČET","INICIAR SESSÃO":"PRIHLÁSIŤ SA",
      "Criar uma conta":"Vytvoriť účet","Registe-se para aceder à sua área pessoal.":"Zaregistrujte sa a získajte prístup do svojej osobnej zóny.",
      "Nome completo":"Celé meno","Número de WhatsApp":"Číslo WhatsApp","Endereço de e-mail":"E-mailová adresa","Criar palavra-passe":"Vytvoriť heslo",
      "Criar conta":"Vytvoriť účet","Voltar":"Späť","Iniciar sessão":"Prihlásiť sa","Já tem uma conta? Entre na sua área pessoal.":"Už máte účet? Prihláste sa.",
      "Palavra-passe":"Heslo","Entrar":"Vstúpiť","Esqueceu-se da palavra-passe?":"Zabudli ste heslo?","Recuperar palavra-passe":"Obnoviť heslo",
      "Enviar link de recuperação":"Odoslať odkaz na obnovenie","Criar nova palavra-passe":"Vytvoriť nové heslo","Nova palavra-passe":"Nové heslo",
      "Confirmar palavra-passe":"Potvrdiť heslo","Guardar nova palavra-passe":"Uložiť nové heslo","Terminar sessão":"Odhlásiť sa",
      "Atualizar pedidos":"Obnoviť žiadosti","Pedido de financiamento":"Žiadosť o financovanie","Enviar candidatura":"Odoslať žiadosť",
      "Informações do requerente":"Informácie o žiadateľovi","Dados bancários":"Bankové údaje","País":"Krajina","Cidade":"Mesto",
      "Profissão":"Povolanie","Montante pretendido (€)":"Požadovaná suma (€)","Prazo de reembolso (meses)":"Doba splácania (mesiace)",
      "Finalidade do financiamento":"Účel financovania","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Názov banky"
    },
    hr: {
      "Início":"Početna","Serviços":"Usluge","Financiamento":"Financiranje","Área de cliente":"Korisničko područje","Contacto":"Kontakt",
      "SOLUÇÕES DE FINANCIAMENTO":"RJEŠENJA ZA FINANCIRANJE","O futuro financeiro começa com uma nova experiência.":"Financijska budućnost počinje novim iskustvom.",
      "Solicitar um empréstimo":"Zatražite financiranje","Entrar na minha conta":"Prijava na moj račun","Conheça os nossos serviços":"Upoznajte naše usluge",
      "Fale connosco":"Kontaktirajte nas","Página inicial":"Početna stranica","CRIAR UMA CONTA":"IZRADITE RAČUN","INICIAR SESSÃO":"PRIJAVA",
      "Criar uma conta":"Izradite račun","Registe-se para aceder à sua área pessoal.":"Registrirajte se za pristup svom osobnom području.",
      "Nome completo":"Puno ime","Número de WhatsApp":"Broj WhatsApp","Endereço de e-mail":"E-adresa","Criar palavra-passe":"Izradite lozinku",
      "Criar conta":"Izradi račun","Voltar":"Natrag","Iniciar sessão":"Prijava","Já tem uma conta? Entre na sua área pessoal.":"Već imate račun? Prijavite se.",
      "Palavra-passe":"Lozinka","Entrar":"Uđi","Esqueceu-se da palavra-passe?":"Zaboravili ste lozinku?","Recuperar palavra-passe":"Oporavak lozinke",
      "Enviar link de recuperação":"Pošalji poveznicu za oporavak","Criar nova palavra-passe":"Izradite novu lozinku","Nova palavra-passe":"Nova lozinka",
      "Confirmar palavra-passe":"Potvrdite lozinku","Guardar nova palavra-passe":"Spremi novu lozinku","Terminar sessão":"Odjava",
      "Atualizar pedidos":"Osvježi zahtjeve","Pedido de financiamento":"Zahtjev za financiranje","Enviar candidatura":"Pošalji zahtjev",
      "Informações do requerente":"Podaci o podnositelju zahtjeva","Dados bancários":"Bankovni podaci","País":"Država","Cidade":"Grad",
      "Profissão":"Zanimanje","Montante pretendido (€)":"Traženi iznos (€)","Prazo de reembolso (meses)":"Rok otplate (mjeseci)",
      "Finalidade do financiamento":"Namjena financiranja","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Naziv banke"
    },
    fr: {
      "Início":"Accueil","Serviços":"Services","Financiamento":"Financement","Área de cliente":"Espace client","Contacto":"Contact",
      "SOLUÇÕES DE FINANCIAMENTO":"SOLUTIONS DE FINANCEMENT","O futuro financeiro começa com uma nova experiência.":"L’avenir financier commence par une nouvelle expérience.",
      "Solicitar um empréstimo":"Demander un financement","Entrar na minha conta":"Accéder à mon compte","Conheça os nossos serviços":"Découvrez nos services",
      "Fale connosco":"Contactez-nous","Página inicial":"Page d’accueil","CRIAR UMA CONTA":"CRÉER UN COMPTE","INICIAR SESSÃO":"SE CONNECTER",
      "Criar uma conta":"Créer un compte","Registe-se para aceder à sua área pessoal.":"Inscrivez-vous pour accéder à votre espace personnel.",
      "Nome completo":"Nom complet","Número de WhatsApp":"Numéro WhatsApp","Endereço de e-mail":"Adresse e-mail","Criar palavra-passe":"Créer un mot de passe",
      "Criar conta":"Créer le compte","Voltar":"Retour","Iniciar sessão":"Se connecter","Já tem uma conta? Entre na sua área pessoal.":"Vous avez déjà un compte ? Connectez-vous à votre espace personnel.",
      "Palavra-passe":"Mot de passe","Entrar":"Connexion","Esqueceu-se da palavra-passe?":"Mot de passe oublié ?","Recuperar palavra-passe":"Récupérer le mot de passe",
      "Enviar link de recuperação":"Envoyer le lien de récupération","Criar nova palavra-passe":"Créer un nouveau mot de passe","Nova palavra-passe":"Nouveau mot de passe",
      "Confirmar palavra-passe":"Confirmer le mot de passe","Guardar nova palavra-passe":"Enregistrer le nouveau mot de passe","Terminar sessão":"Se déconnecter",
      "Atualizar pedidos":"Actualiser les demandes","Pedido de financiamento":"Demande de financement","Enviar candidatura":"Envoyer la demande",
      "Informações do requerente":"Informations du demandeur","Dados bancários":"Coordonnées bancaires","País":"Pays","Cidade":"Ville",
      "Profissão":"Profession","Montante pretendido (€)":"Montant souhaité (€)","Prazo de reembolso (meses)":"Durée de remboursement (mois)",
      "Finalidade do financiamento":"Objet du financement","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Nom de la banque"
    }
  };
  Object.assign(translations.el, {"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Καλώς ήρθατε στην INTEREUROPA. Γνωρίστε τις διαθέσιμες υπηρεσίες μας και παρακολουθήστε τα αιτήματά σας μέσω της περιοχής πελατών.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Ενημερωθείτε για τη διαδικασία υποβολής αίτησης και υποβάλετε αίτημα για αξιολόγηση.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Αποκτήστε πρόσβαση στον λογαριασμό σας, δείτε τα αιτήματά σας και παρακολουθήστε τις σχετικές ενημερώσεις.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Ελέγξτε την κατάσταση των αιτημάτων που υποβάλατε μέσω του προσωπικού σας χώρου.","Financiamento com responsabilidade":"Υπεύθυνη χρηματοδότηση","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Όλες οι αιτήσεις υπόκεινται σε ατομική αξιολόγηση. Η υποβολή αίτησης δεν συνεπάγεται έγκριση ούτε εγγυάται τη χορήγηση χρηματοδότησης. Οι ισχύοντες όροι πρέπει να γνωστοποιούνται πριν από οποιαδήποτε σύμβαση.","Solicitar um empréstimo →":"Αίτηση χρηματοδότησης →","Aceder à minha conta →":"Πρόσβαση στον λογαριασμό μου →","Consultar área pessoal →":"Προβολή προσωπικού χώρου →","Acompanhamento":"Παρακολούθηση"});
  for (const [language, entries] of Object.entries({"de":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Willkommen bei INTEREUROPA. Entdecken Sie unsere verfügbaren Dienstleistungen und verfolgen Sie Ihre Anfragen über den Kundenbereich.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Informieren Sie sich über das Antragsverfahren und reichen Sie einen Antrag zur Prüfung ein.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Greifen Sie auf Ihr Konto zu, sehen Sie Ihre Anfragen ein und verfolgen Sie deren Aktualisierungen.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Überprüfen Sie den Status Ihrer über Ihren persönlichen Bereich eingereichten Anfragen.","Financiamento com responsabilidade":"Verantwortungsvolle Finanzierung","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Alle Anträge werden individuell geprüft. Die Einreichung eines Antrags stellt keine Genehmigung dar und garantiert keine Finanzierung. Die geltenden Bedingungen müssen vor jedem Vertragsabschluss mitgeteilt werden.","Solicitar um empréstimo →":"Finanzierung beantragen →","Aceder à minha conta →":"Auf mein Konto zugreifen →","Consultar área pessoal →":"Persönlichen Bereich ansehen →","Acompanhamento":"Antragsverfolgung"},"pl":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Witamy w INTEREUROPA. Poznaj dostępne usługi i śledź swoje wnioski w strefie klienta.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Zapoznaj się z informacjami o procesie składania wniosku i prześlij go do analizy.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Zaloguj się na swoje konto, sprawdź wnioski i śledź ich aktualizacje.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Sprawdź status wniosków złożonych w swojej strefie klienta.","Financiamento com responsabilidade":"Odpowiedzialne finansowanie","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Każdy wniosek podlega indywidualnej analizie. Złożenie wniosku nie oznacza jego zatwierdzenia ani nie gwarantuje przyznania finansowania. Obowiązujące warunki muszą zostać przedstawione przed zawarciem jakiejkolwiek umowy.","Solicitar um empréstimo →":"Złóż wniosek o finansowanie →","Aceder à minha conta →":"Przejdź do mojego konta →","Consultar área pessoal →":"Sprawdź strefę klienta →","Acompanhamento":"Monitorowanie"},"es":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Bienvenido a INTEREUROPA. Conozca nuestros servicios disponibles y siga sus solicitudes a través del área de cliente.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consulte la información sobre el proceso de solicitud y presente una solicitud para su evaluación.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Acceda a su cuenta, consulte sus solicitudes y siga las actualizaciones correspondientes.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consulte el estado de las solicitudes presentadas a través de su área personal.","Financiamento com responsabilidade":"Financiación responsable","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Todas las solicitudes están sujetas a un análisis individual. La presentación de una solicitud no implica su aprobación ni garantiza la concesión de financiación. Las condiciones aplicables deben comunicarse antes de cualquier contratación.","Solicitar um empréstimo →":"Solicitar financiación →","Aceder à minha conta →":"Acceder a mi cuenta →","Consultar área pessoal →":"Consultar área personal →","Acompanhamento":"Seguimiento"},"it":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Benvenuto in INTEREUROPA. Scopri i servizi disponibili e segui le tue richieste attraverso l'area clienti.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consulta le informazioni sulla procedura di richiesta e presenta una domanda per la valutazione.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Accedi al tuo account, consulta le tue richieste e segui i relativi aggiornamenti.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consulta lo stato delle richieste inviate tramite la tua area personale.","Financiamento com responsabilidade":"Finanziamento responsabile","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Tutte le richieste sono soggette a una valutazione individuale. La presentazione di una richiesta non costituisce un'approvazione né garantisce la concessione del finanziamento. Le condizioni applicabili devono essere comunicate prima di qualsiasi contratto.","Solicitar um empréstimo →":"Richiedere un finanziamento →","Aceder à minha conta →":"Accedi al mio account →","Consultar área pessoal →":"Consulta l'area personale →","Acompanhamento":"Monitoraggio"},"el":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Καλώς ήρθατε στην INTEREUROPA. Γνωρίστε τις διαθέσιμες υπηρεσίες μας και παρακολουθήστε τα αιτήματά σας μέσω της περιοχής πελατών.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Ενημερωθείτε για τη διαδικασία υποβολής αίτησης και υποβάλετε αίτημα για αξιολόγηση.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Αποκτήστε πρόσβαση στον λογαριασμό σας, δείτε τα αιτήματά σας και παρακολουθήστε τις σχετικές ενημερώσεις.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Ελέγξτε την κατάσταση των αιτημάτων που υποβάλατε μέσω του προσωπικού σας χώρου.","Financiamento com responsabilidade":"Υπεύθυνη χρηματοδότηση","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Όλες οι αιτήσεις υπόκεινται σε ατομική αξιολόγηση. Η υποβολή αίτησης δεν συνεπάγεται έγκριση ούτε εγγυάται τη χορήγηση χρηματοδότησης. Οι ισχύοντες όροι πρέπει να γνωστοποιούνται πριν από οποιαδήποτε σύμβαση.","Solicitar um empréstimo →":"Αίτηση χρηματοδότησης →","Aceder à minha conta →":"Πρόσβαση στον λογαριασμό μου →","Consultar área pessoal →":"Προβολή προσωπικού χώρου →","Acompanhamento":"Παρακολούθηση"},"sk":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Vitajte v INTEREUROPA. Spoznajte naše dostupné služby a sledujte svoje žiadosti prostredníctvom klientskej zóny.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Prečítajte si informácie o procese podania žiadosti a odošlite žiadosť na posúdenie.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Získajte prístup k svojmu účtu, prezrite si žiadosti a sledujte ich aktualizácie.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Skontrolujte stav žiadostí odoslaných prostredníctvom svojho osobného priestoru.","Financiamento com responsabilidade":"Zodpovedné financovanie","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Všetky žiadosti podliehajú individuálnemu posúdeniu. Podanie žiadosti neznamená jej schválenie ani nezaručuje poskytnutie financovania. Príslušné podmienky musia byť oznámené pred uzavretím akejkoľvek zmluvy.","Solicitar um empréstimo →":"Požiadať o financovanie →","Aceder à minha conta →":"Prejsť do môjho účtu →","Consultar área pessoal →":"Zobraziť osobnú zónu →","Acompanhamento":"Sledovanie"},"hr":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Dobrodošli u INTEREUROPA. Upoznajte naše dostupne usluge i pratite svoje zahtjeve putem korisničkog područja.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Pogledajte informacije o postupku prijave i podnesite zahtjev na razmatranje.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Pristupite svom računu, pregledajte zahtjeve i pratite njihova ažuriranja.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Provjerite status zahtjeva podnesenih putem svog osobnog područja.","Financiamento com responsabilidade":"Odgovorno financiranje","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Sve prijave podliježu pojedinačnoj procjeni. Podnošenje zahtjeva ne znači odobrenje niti jamči odobravanje financiranja. Primjenjivi uvjeti moraju biti priopćeni prije sklapanja bilo kakvog ugovora.","Solicitar um empréstimo →":"Zatražite financiranje →","Aceder à minha conta →":"Pristupite mom računu →","Consultar área pessoal →":"Pogledajte korisničko područje →","Acompanhamento":"Praćenje"},"fr":{"Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Bienvenue chez INTEREUROPA. Découvrez nos services et suivez vos demandes depuis votre espace client.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consultez les informations sur la procédure de demande et soumettez un dossier pour examen.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Accédez à votre compte, consultez vos demandes et suivez leurs mises à jour.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consultez l’état des demandes soumises depuis votre espace personnel.","Financiamento com responsabilidade":"Un financement responsable","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Toutes les demandes font l’objet d’une analyse individuelle. Le dépôt d’une demande ne vaut pas approbation et ne garantit pas l’octroi d’un financement. Les conditions applicables doivent être communiquées avant toute contractualisation.","Solicitar um empréstimo →":"Demander un financement →","Aceder à minha conta →":"Accéder à mon compte →","Consultar área pessoal →":"Consulter l’espace personnel →","Acompanhamento":"Suivi"}})) Object.assign(translations[language], entries);

  const pageTranslations = {
  "de": {
    "Escolha uma das opções para continuar.": "Wählen Sie eine Option, um fortzufahren.",
    "Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.": "Greifen Sie auf Ihr Konto zu, sehen Sie Ihre Anfragen ein und verfolgen Sie deren Aktualisierungen.",
    "Rendimento mensal aproximado (€)": "Ungefähres monatliches Einkommen (€)",
    "Montante pretendido (€)": "Gewünschter Betrag (€)",
    "Montante aprovado": "Genehmigter Betrag",
    "Idade": "Alter",
    "Prazo de reembolso": "Rückzahlungsfrist",
    "E-mail de contacto": "Kontakt-E-Mail",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Verwendungszweck",
    "Estado": "Status",
    "Data do pedido": "Antragsdatum",
    "A carregar...": "Wird geladen...",
    "A carregar os seus pedidos...": "Ihre Anfragen werden geladen...",
    "Ainda não tem pedidos registados.": "Sie haben noch keine Anfragen.",
    "Informação importante:": "Wichtige Information:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Füllen Sie die erforderlichen Felder aus, um Ihren Antrag einzureichen.",
    "Número de WhatsApp": "WhatsApp-Nummer",
    "Contacto telefónico / WhatsApp": "Telefonnummer / WhatsApp",
    "Rendimento mensal aproximado": "Ungefähres monatliches Einkommen",
    "Montante solicitado": "Beantragter Betrag",
    "Nome do banco": "Name der Bank",
    "Pendente de confirmação": "Bestätigung ausstehend",
    "Aprovado": "Genehmigt",
    "Em análise": "In Prüfung",
    "Recusado": "Abgelehnt"
  },
  "pl": {
    "Escolha uma das opções para continuar.": "Wybierz jedną z opcji, aby kontynuować.",
    "Rendimento mensal aproximado (€)": "Przybliżony miesięczny dochód (€)",
    "Montante aprovado": "Zatwierdzona kwota",
    "Idade": "Wiek",
    "Prazo de reembolso": "Okres spłaty",
    "E-mail de contacto": "Kontaktowy adres e-mail",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Cel",
    "Estado": "Status",
    "Data do pedido": "Data złożenia wniosku",
    "A carregar...": "Ładowanie...",
    "A carregar os seus pedidos...": "Ładowanie Twoich wniosków...",
    "Ainda não tem pedidos registados.": "Nie masz jeszcze zarejestrowanych wniosków.",
    "Informação importante:": "Ważna informacja:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Wypełnij wymagane pola, aby złożyć wniosek.",
    "Contacto telefónico / WhatsApp": "Numer telefonu / WhatsApp",
    "Montante solicitado": "Wnioskowana kwota",
    "Pendente de confirmação": "Oczekuje na potwierdzenie",
    "Aprovado": "Zatwierdzony",
    "Em análise": "W trakcie analizy",
    "Recusado": "Odrzucony"
  },
  "es": {
    "Escolha uma das opções para continuar.": "Elija una de las opciones para continuar.",
    "Rendimento mensal aproximado (€)": "Ingresos mensuales aproximados (€)",
    "Montante aprovado": "Importe aprobado",
    "Idade": "Edad",
    "Prazo de reembolso": "Plazo de devolución",
    "E-mail de contacto": "Correo electrónico de contacto",
    "Telefone / WhatsApp": "Teléfono / WhatsApp",
    "Finalidade": "Finalidad",
    "Estado": "Estado",
    "Data do pedido": "Fecha de solicitud",
    "A carregar...": "Cargando...",
    "A carregar os seus pedidos...": "Cargando sus solicitudes...",
    "Ainda não tem pedidos registados.": "Todavía no tiene solicitudes registradas.",
    "Informação importante:": "Información importante:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Complete los campos necesarios para presentar su solicitud.",
    "Contacto telefónico / WhatsApp": "Contacto telefónico / WhatsApp",
    "Montante solicitado": "Importe solicitado",
    "Pendente de confirmação": "Pendiente de confirmación",
    "Aprovado": "Aprobado",
    "Em análise": "En análisis",
    "Recusado": "Rechazado"
  },
  "it": {
    "Escolha uma das opções para continuar.": "Scegli un'opzione per continuare.",
    "Rendimento mensal aproximado (€)": "Reddito mensile approssimativo (€)",
    "Montante aprovado": "Importo approvato",
    "Idade": "Età",
    "Prazo de reembolso": "Durata del rimborso",
    "E-mail de contacto": "E-mail di contatto",
    "Telefone / WhatsApp": "Telefono / WhatsApp",
    "Finalidade": "Finalità",
    "Estado": "Stato",
    "Data do pedido": "Data della richiesta",
    "A carregar...": "Caricamento...",
    "A carregar os seus pedidos...": "Caricamento delle tue richieste...",
    "Ainda não tem pedidos registados.": "Non hai ancora richieste registrate.",
    "Informação importante:": "Informazione importante:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Compila i campi richiesti per presentare la tua richiesta.",
    "Contacto telefónico / WhatsApp": "Contatto telefonico / WhatsApp",
    "Montante solicitado": "Importo richiesto",
    "Pendente de confirmação": "In attesa di conferma",
    "Aprovado": "Approvato",
    "Em análise": "In valutazione",
    "Recusado": "Respinto"
  },
  "el": {
    "Escolha uma das opções para continuar.": "Επιλέξτε μία από τις επιλογές για να συνεχίσετε.",
    "Rendimento mensal aproximado (€)": "Κατά προσέγγιση μηνιαίο εισόδημα (€)",
    "Montante aprovado": "Εγκεκριμένο ποσό",
    "Idade": "Ηλικία",
    "Prazo de reembolso": "Περίοδος αποπληρωμής",
    "E-mail de contacto": "Email επικοινωνίας",
    "Telefone / WhatsApp": "Τηλέφωνο / WhatsApp",
    "Finalidade": "Σκοπός",
    "Estado": "Κατάσταση",
    "Data do pedido": "Ημερομηνία αίτησης",
    "A carregar...": "Φόρτωση...",
    "A carregar os seus pedidos...": "Φόρτωση των αιτημάτων σας...",
    "Ainda não tem pedidos registados.": "Δεν έχετε ακόμη καταχωρημένα αιτήματα.",
    "Informação importante:": "Σημαντική πληροφορία:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Συμπληρώστε τα απαιτούμενα πεδία για να υποβάλετε το αίτημά σας.",
    "Contacto telefónico / WhatsApp": "Τηλέφωνο επικοινωνίας / WhatsApp",
    "Montante solicitado": "Ζητούμενο ποσό",
    "Pendente de confirmação": "Σε αναμονή επιβεβαίωσης",
    "Aprovado": "Εγκρίθηκε",
    "Em análise": "Υπό εξέταση",
    "Recusado": "Απορρίφθηκε"
  },
  "sk": {
    "Escolha uma das opções para continuar.": "Vyberte jednu z možností a pokračujte.",
    "Rendimento mensal aproximado (€)": "Približný mesačný príjem (€)",
    "Montante aprovado": "Schválená suma",
    "Idade": "Vek",
    "Prazo de reembolso": "Doba splácania",
    "E-mail de contacto": "Kontaktný e-mail",
    "Telefone / WhatsApp": "Telefón / WhatsApp",
    "Finalidade": "Účel",
    "Estado": "Stav",
    "Data do pedido": "Dátum žiadosti",
    "A carregar...": "Načítava sa...",
    "A carregar os seus pedidos...": "Načítavajú sa vaše žiadosti...",
    "Ainda não tem pedidos registados.": "Zatiaľ nemáte žiadne registrované žiadosti.",
    "Informação importante:": "Dôležitá informácia:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Vyplňte požadované polia na odoslanie žiadosti.",
    "Contacto telefónico / WhatsApp": "Telefónny kontakt / WhatsApp",
    "Montante solicitado": "Požadovaná suma",
    "Pendente de confirmação": "Čaká na potvrdenie",
    "Aprovado": "Schválené",
    "Em análise": "Posudzuje sa",
    "Recusado": "Zamietnuté"
  },
  "hr": {
    "Escolha uma das opções para continuar.": "Odaberite jednu od mogućnosti za nastavak.",
    "Rendimento mensal aproximado (€)": "Približan mjesečni prihod (€)",
    "Montante aprovado": "Odobreni iznos",
    "Idade": "Dob",
    "Prazo de reembolso": "Rok otplate",
    "E-mail de contacto": "Kontaktna e-adresa",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Namjena",
    "Estado": "Status",
    "Data do pedido": "Datum zahtjeva",
    "A carregar...": "Učitavanje...",
    "A carregar os seus pedidos...": "Učitavanje vaših zahtjeva...",
    "Ainda não tem pedidos registados.": "Još nemate registriranih zahtjeva.",
    "Informação importante:": "Važna informacija:",
    "Preencha os campos necessários para apresentar o seu pedido.": "Ispunite potrebna polja za podnošenje zahtjeva.",
    "Contacto telefónico / WhatsApp": "Telefonski kontakt / WhatsApp",
    "Montante solicitado": "Traženi iznos",
    "Pendente de confirmação": "Čeka potvrdu",
    "Aprovado": "Odobreno",
    "Em análise": "U obradi",
    "Recusado": "Odbijeno"
  },
  "fr": {
    "Escolha uma das opções para continuar.": "Choisissez une option pour continuer.",
    "Rendimento mensal aproximado (€)": "Revenu mensuel approximatif (€)",
    "Montante aprovado": "Montant approuvé",
    "Idade": "Âge",
    "Prazo de reembolso": "Durée de remboursement",
    "E-mail de contacto": "E-mail de contact",
    "Telefone / WhatsApp": "Téléphone / WhatsApp",
    "Finalidade": "Objetif",
    "Estado": "Statut",
    "Data do pedido": "Date de la demande",
    "A carregar...": "Chargement...",
    "A carregar os seus pedidos...": "Chargement de vos demandes...",
    "Ainda não tem pedidos registados.": "Vous n’avez pas encore de demandes enregistrées.",
    "Informação importante:": "Information importante :",
    "Preencha os campos necessários para apresentar o seu pedido.": "Veuillez remplir les champs nécessaires pour soumettre votre demande.",
    "Contacto telefónico / WhatsApp": "Contact téléphonique / WhatsApp",
    "Montante solicitado": "Montant demandé",
    "Pendente de confirmação": "En attente de confirmation",
    "Aprovado": "Approuvé",
    "Em análise": "En cours d’examen",
    "Recusado": "Refusé"
  }
};
  for (const [language, entries] of Object.entries(pageTranslations)) Object.assign(translations[language], entries);
  const imageAltTranslations = {
    de: {"Profissionais num escritório a analisar documentos e notas de euro":"Bürofachkräfte bei der Prüfung von Dokumenten und Euro-Banknoten"},
    pl: {"Profissionais num escritório a analisar documentos e notas de euro":"Pracownicy biura analizujący dokumenty i banknoty euro"},
    es: {"Profissionais num escritório a analisar documentos e notas de euro":"Profesionales en una oficina analizando documentos y billetes de euro"},
    it: {"Profissionais num escritório a analisar documentos e notas de euro":"Professionisti in un ufficio che esaminano documenti e banconote in euro"},
    el: {"Profissionais num escritório a analisar documentos e notas de euro":"Επαγγελματίες σε γραφείο που εξετάζουν έγγραφα και χαρτονομίσματα ευρώ"},
    sk: {"Profissionais num escritório a analisar documentos e notas de euro":"Pracovníci v kancelárii, ktorí analyzujú dokumenty a eurobankovky"},
    hr: {"Profissionais num escritório a analisar documentos e notas de euro":"Stručnjaci u uredu koji pregledavaju dokumente i novčanice eura"},
    fr: {"Profissionais num escritório a analisar documentos e notas de euro":"Des professionnels dans un bureau examinant des documents et des billets en euros"}
  };
  for (const [language, entries] of Object.entries(imageAltTranslations)) Object.assign(translations[language], entries);
  // Traduções completas da área pessoal e do painel de financiamento aprovado.
  const clientPanelTranslations = {
    de: {
      "Ordem de transferência":"Überweisungsauftrag","Bem-vindo à sua área pessoal":"Willkommen in Ihrem persönlichen Bereich",
      "Conta autenticada":"Konto authentifiziert","Endereço de e-mail:":"E-Mail-Adresse:","O meu espaço financeiro":"Mein Finanzbereich",
      "NOME DO BANCO":"NAME DER BANK","IBAN REGISTADO":"HINTERLEGTE IBAN","MONTANTE APROVADO":"GENEHMIGTER BETRAG",
      "Estado: Aprovado":"Status: Genehmigt","Ordem de transferência pendente de ativação":"Überweisungsauftrag wartet auf Aktivierung",
      "RETIRAR":"ABHEBEN","INFORMAÇÕES":"INFORMATIONEN","Retirar":"Abheben","Informações do financiamento":"Finanzierungsinformationen",
      "Voltar":"Zurück","Os meus pedidos de financiamento":"Meine Finanzierungsanträge",
      "Consulte todos os detalhes dos pedidos que enviou.":"Sehen Sie sich alle Einzelheiten Ihrer eingereichten Anträge an.",
      "A carregar os seus pedidos...":"Ihre Anträge werden geladen...","Nova solicitação de financiamento":"Neuen Finanzierungsantrag stellen",
      "Atualizar pedidos":"Anträge aktualisieren","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — FINANZLÖSUNGEN",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — finanzielle Stabilität jedes Kunden",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Der begünstigte Kunde wird gebeten, INTEREUROPA zu kontaktieren, um die Aktivierung der Überweisung abzuschließen. Anschließend werden die Mittel auf seinem Bankkonto zur Abhebung bereitgestellt.",
      "Nome completo:":"Vollständiger Name:","Idade:":"Alter:","País:":"Land:","Cidade:":"Stadt:","Profissão:":"Beruf:",
      "Rendimento mensal aproximado:":"Ungefähres monatliches Einkommen:","Montante solicitado:":"Beantragter Betrag:","Montante aprovado:":"Genehmigter Betrag:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Name der Bank:","Prazo de reembolso:":"Rückzahlungsfrist:",
      "E-mail de contacto:":"Kontakt-E-Mail:","Telefone / WhatsApp:":"Telefon / WhatsApp:","Finalidade:":"Verwendungszweck:",
      "Estado:":"Status:","Data do pedido:":"Antragsdatum:","Disponibilidade dos fundos:":"Verfügbarkeit der Mittel:",
      "Confirmada no registo":"Im Datensatz bestätigt","Pendente de confirmação":"Bestätigung ausstehend","Não indicado":"Nicht angegeben","Não indicada":"Nicht angegeben",
      "Não disponível":"Nicht verfügbar","A sua sessão terminou. Inicie sessão novamente.":"Ihre Sitzung ist abgelaufen. Bitte melden Sie sich erneut an.",
      "Não foi possível carregar os pedidos. ":"Die Anträge konnten nicht geladen werden. "
    },
    pl: {
      "Ordem de transferência":"Zlecenie przelewu","Bem-vindo à sua área pessoal":"Witamy w Twojej strefie klienta",
      "Conta autenticada":"Konto uwierzytelnione","Endereço de e-mail:":"Adres e-mail:","O meu espaço financeiro":"Moja strefa finansowa",
      "NOME DO BANCO":"NAZWA BANKU","IBAN REGISTADO":"ZAREJESTROWANY IBAN","MONTANTE APROVADO":"ZATWIERDZONA KWOTA",
      "Estado: Aprovado":"Status: Zatwierdzono","Ordem de transferência pendente de ativação":"Zlecenie przelewu oczekuje na aktywację",
      "RETIRAR":"WYPŁAĆ","INFORMAÇÕES":"INFORMACJE","Retirar":"Wypłać","Informações do financiamento":"Informacje o finansowaniu",
      "Voltar":"Wróć","Os meus pedidos de financiamento":"Moje wnioski o finansowanie",
      "Consulte todos os detalhes dos pedidos que enviou.":"Sprawdź wszystkie szczegóły przesłanych wniosków.",
      "A carregar os seus pedidos...":"Ładowanie Twoich wniosków...","Nova solicitação de financiamento":"Nowy wniosek o finansowanie",
      "Atualizar pedidos":"Odśwież wnioski","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — ROZWIĄZANIA FINANSOWE",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — stabilność finansowa każdego klienta",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Klient będący beneficjentem proszony jest o kontakt z INTEREUROPA w celu dokończenia aktywacji przelewu. Następnie środki zostaną udostępnione na jego rachunku bankowym do wypłaty.",
      "Nome completo:":"Imię i nazwisko:","Idade:":"Wiek:","País:":"Kraj:","Cidade:":"Miasto:","Profissão:":"Zawód:",
      "Rendimento mensal aproximado:":"Przybliżony miesięczny dochód:","Montante solicitado:":"Wnioskowana kwota:","Montante aprovado:":"Zatwierdzona kwota:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Nazwa banku:","Prazo de reembolso:":"Okres spłaty:",
      "E-mail de contacto:":"E-mail kontaktowy:","Telefone / WhatsApp:":"Telefon / WhatsApp:","Finalidade:":"Cel:",
      "Estado:":"Status:","Data do pedido:":"Data wniosku:","Disponibilidade dos fundos:":"Dostępność środków:",
      "Confirmada no registo":"Potwierdzono w rejestrze","Pendente de confirmação":"Oczekuje na potwierdzenie","Não indicado":"Nie podano","Não indicada":"Nie podano",
      "Não disponível":"Niedostępne","A sua sessão terminou. Inicie sessão novamente.":"Sesja wygasła. Zaloguj się ponownie.",
      "Não foi possível carregar os pedidos. ":"Nie udało się załadować wniosków. "
    },
    es: {
      "Ordem de transferência":"Orden de transferencia","Bem-vindo à sua área pessoal":"Bienvenido a su área personal",
      "Conta autenticada":"Cuenta autenticada","Endereço de e-mail:":"Dirección de correo electrónico:","O meu espaço financeiro":"Mi espacio financiero",
      "NOME DO BANCO":"NOMBRE DEL BANCO","IBAN REGISTADO":"IBAN REGISTRADO","MONTANTE APROVADO":"IMPORTE APROBADO",
      "Estado: Aprovado":"Estado: Aprobado","Ordem de transferência pendente de ativação":"Orden de transferencia pendiente de activación",
      "RETIRAR":"RETIRAR","INFORMAÇÕES":"INFORMACIÓN","Retirar":"Retirar","Informações do financiamento":"Información de la financiación",
      "Voltar":"Volver","Os meus pedidos de financiamento":"Mis solicitudes de financiación",
      "Consulte todos os detalhes dos pedidos que enviou.":"Consulte todos los detalles de las solicitudes que ha enviado.",
      "A carregar os seus pedidos...":"Cargando sus solicitudes...","Nova solicitação de financiamento":"Nueva solicitud de financiación",
      "Atualizar pedidos":"Actualizar solicitudes","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — SOLUCIONES FINANCIERAS",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — estabilidad financiera de cada cliente",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Se invita al cliente beneficiario a contactar con INTEREUROPA para finalizar la activación de la transferencia. Después, los fondos estarán disponibles en su cuenta bancaria para retirarlos.",
      "Nome completo:":"Nombre completo:","Idade:":"Edad:","País:":"País:","Cidade:":"Ciudad:","Profissão:":"Profesión:",
      "Rendimento mensal aproximado:":"Ingresos mensuales aproximados:","Montante solicitado:":"Importe solicitado:","Montante aprovado:":"Importe aprobado:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Nombre del banco:","Prazo de reembolso:":"Plazo de devolución:",
      "E-mail de contacto:":"Correo electrónico de contacto:","Telefone / WhatsApp:":"Teléfono / WhatsApp:","Finalidade:":"Finalidad:",
      "Estado:":"Estado:","Data do pedido:":"Fecha de la solicitud:","Disponibilidade dos fundos:":"Disponibilidad de los fondos:",
      "Confirmada no registo":"Confirmada en el registro","Pendente de confirmação":"Pendiente de confirmación","Não indicado":"No indicado","Não indicada":"No indicada",
      "Não disponível":"No disponible","A sua sessão terminou. Inicie sessão novamente.":"Su sesión ha finalizado. Inicie sesión de nuevo.",
      "Não foi possível carregar os pedidos. ":"No se pudieron cargar las solicitudes. "
    },
    it: {
      "Ordem de transferência":"Ordine di trasferimento","Bem-vindo à sua área pessoal":"Benvenuto nella tua area personale",
      "Conta autenticada":"Account autenticato","Endereço de e-mail:":"Indirizzo e-mail:","O meu espaço financeiro":"Il mio spazio finanziario",
      "NOME DO BANCO":"NOME DELLA BANCA","IBAN REGISTADO":"IBAN REGISTRATO","MONTANTE APROVADO":"IMPORTO APPROVATO",
      "Estado: Aprovado":"Stato: Approvato","Ordem de transferência pendente de ativação":"Ordine di trasferimento in attesa di attivazione",
      "RETIRAR":"PRELEVARE","INFORMAÇÕES":"INFORMAZIONI","Retirar":"Prelevare","Informações do financiamento":"Informazioni sul finanziamento",
      "Voltar":"Indietro","Os meus pedidos de financiamento":"Le mie richieste di finanziamento",
      "Consulte todos os detalhes dos pedidos que enviou.":"Consulta tutti i dettagli delle richieste che hai inviato.",
      "A carregar os seus pedidos...":"Caricamento delle tue richieste...","Nova solicitação de financiamento":"Nuova richiesta di finanziamento",
      "Atualizar pedidos":"Aggiorna richieste","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — SOLUZIONI FINANZIARIE",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — stabilità finanziaria di ogni cliente",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Il cliente beneficiario è invitato a contattare INTEREUROPA per completare l'attivazione del trasferimento. Successivamente, i fondi saranno disponibili sul suo conto bancario per il prelievo.",
      "Nome completo:":"Nome completo:","Idade:":"Età:","País:":"Paese:","Cidade:":"Città:","Profissão:":"Professione:",
      "Rendimento mensal aproximado:":"Reddito mensile approssimativo:","Montante solicitado:":"Importo richiesto:","Montante aprovado:":"Importo approvato:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Nome della banca:","Prazo de reembolso:":"Durata del rimborso:",
      "E-mail de contacto:":"E-mail di contatto:","Telefone / WhatsApp:":"Telefono / WhatsApp:","Finalidade:":"Finalità:",
      "Estado:":"Stato:","Data do pedido:":"Data della richiesta:","Disponibilidade dos fundos:":"Disponibilità dei fondi:",
      "Confirmada no registo":"Confermata nel registro","Pendente de confirmação":"In attesa di conferma","Não indicado":"Non indicato","Não indicada":"Non indicata",
      "Não disponível":"Non disponibile","A sua sessão terminou. Inicie sessão novamente.":"La sessione è terminata. Accedi di nuovo.",
      "Não foi possível carregar os pedidos. ":"Impossibile caricare le richieste. "
    },
    el: {
      "Ordem de transferência":"Εντολή μεταφοράς","Bem-vindo à sua área pessoal":"Καλώς ήρθατε στον προσωπικό σας χώρο",
      "Conta autenticada":"Ο λογαριασμός έχει πιστοποιηθεί","Endereço de e-mail:":"Διεύθυνση email:","O meu espaço financeiro":"Ο οικονομικός μου χώρος",
      "NOME DO BANCO":"ΟΝΟΜΑ ΤΡΑΠΕΖΑΣ","IBAN REGISTADO":"ΚΑΤΑΧΩΡΙΣΜΕΝΟ IBAN","MONTANTE APROVADO":"ΕΓΚΕΚΡΙΜΕΝΟ ΠΟΣΟ",
      "Estado: Aprovado":"Κατάσταση: Εγκρίθηκε","Ordem de transferência pendente de ativação":"Η εντολή μεταφοράς αναμένει ενεργοποίηση",
      "RETIRAR":"ΑΝΑΛΗΨΗ","INFORMAÇÕES":"ΠΛΗΡΟΦΟΡΙΕΣ","Retirar":"Ανάληψη","Informações do financiamento":"Πληροφορίες χρηματοδότησης",
      "Voltar":"Επιστροφή","Os meus pedidos de financiamento":"Τα αιτήματά μου για χρηματοδότηση",
      "Consulte todos os detalhes dos pedidos que enviou.":"Δείτε όλες τις λεπτομέρειες των αιτημάτων που υποβάλατε.",
      "A carregar os seus pedidos...":"Φόρτωση των αιτημάτων σας...","Nova solicitação de financiamento":"Νέο αίτημα χρηματοδότησης",
      "Atualizar pedidos":"Ανανέωση αιτημάτων","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — ΧΡΗΜΑΤΟΟΙΚΟΝΟΜΙΚΕΣ ΛΥΣΕΙΣ",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — οικονομική σταθερότητα κάθε πελάτη",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Ο δικαιούχος πελάτης καλείται να επικοινωνήσει με την INTEREUROPA για να ολοκληρώσει την ενεργοποίηση της μεταφοράς. Στη συνέχεια, τα χρήματα θα είναι διαθέσιμα στον τραπεζικό του λογαριασμό για ανάληψη.",
      "Nome completo:":"Ονοματεπώνυμο:","Idade:":"Ηλικία:","País:":"Χώρα:","Cidade:":"Πόλη:","Profissão:":"Επάγγελμα:",
      "Rendimento mensal aproximado:":"Κατά προσέγγιση μηνιαίο εισόδημα:","Montante solicitado:":"Ζητούμενο ποσό:","Montante aprovado:":"Εγκεκριμένο ποσό:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Όνομα τράπεζας:","Prazo de reembolso:":"Περίοδος αποπληρωμής:",
      "E-mail de contacto:":"Email επικοινωνίας:","Telefone / WhatsApp:":"Τηλέφωνο / WhatsApp:","Finalidade:":"Σκοπός:",
      "Estado:":"Κατάσταση:","Data do pedido:":"Ημερομηνία αιτήματος:","Disponibilidade dos fundos:":"Διαθεσιμότητα χρημάτων:",
      "Confirmada no registo":"Επιβεβαιώθηκε στην καταχώριση","Pendente de confirmação":"Σε αναμονή επιβεβαίωσης","Não indicado":"Δεν αναφέρεται","Não indicada":"Δεν αναφέρεται",
      "Não disponível":"Μη διαθέσιμο","A sua sessão terminou. Inicie sessão novamente.":"Η συνεδρία σας έληξε. Συνδεθείτε ξανά.",
      "Não foi possível carregar os pedidos. ":"Δεν ήταν δυνατή η φόρτωση των αιτημάτων. "
    },
    sk: {
      "Ordem de transferência":"Príkaz na prevod","Bem-vindo à sua área pessoal":"Vitajte vo svojej osobnej zóne",
      "Conta autenticada":"Účet je overený","Endereço de e-mail:":"E-mailová adresa:","O meu espaço financeiro":"Môj finančný priestor",
      "NOME DO BANCO":"NÁZOV BANKY","IBAN REGISTADO":"REGISTROVANÝ IBAN","MONTANTE APROVADO":"SCHVÁLENÁ SUMA",
      "Estado: Aprovado":"Stav: Schválené","Ordem de transferência pendente de ativação":"Príkaz na prevod čaká na aktiváciu",
      "RETIRAR":"VYBRAŤ","INFORMAÇÕES":"INFORMÁCIE","Retirar":"Vybrať","Informações do financiamento":"Informácie o financovaní",
      "Voltar":"Späť","Os meus pedidos de financiamento":"Moje žiadosti o financovanie",
      "Consulte todos os detalhes dos pedidos que enviou.":"Pozrite si všetky podrobnosti odoslaných žiadostí.",
      "A carregar os seus pedidos...":"Načítavajú sa vaše žiadosti...","Nova solicitação de financiamento":"Nová žiadosť o financovanie",
      "Atualizar pedidos":"Obnoviť žiadosti","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — FINANČNÉ RIEŠENIA",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — finančná stabilita každého klienta",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Príjemca je vyzvaný, aby kontaktoval INTEREUROPA a dokončil aktiváciu prevodu. Následne budú finančné prostriedky k dispozícii na jeho bankovom účte na výber.",
      "Nome completo:":"Celé meno:","Idade:":"Vek:","País:":"Krajina:","Cidade:":"Mesto:","Profissão:":"Povolanie:",
      "Rendimento mensal aproximado:":"Približný mesačný príjem:","Montante solicitado:":"Požadovaná suma:","Montante aprovado:":"Schválená suma:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Názov banky:","Prazo de reembolso:":"Doba splácania:",
      "E-mail de contacto:":"Kontaktný e-mail:","Telefone / WhatsApp:":"Telefón / WhatsApp:","Finalidade:":"Účel:",
      "Estado:":"Stav:","Data do pedido:":"Dátum žiadosti:","Disponibilidade dos fundos:":"Dostupnosť finančných prostriedkov:",
      "Confirmada no registo":"Potvrdené v zázname","Pendente de confirmação":"Čaká na potvrdenie","Não indicado":"Neuvedené","Não indicada":"Neuvedené",
      "Não disponível":"Nedostupné","A sua sessão terminou. Inicie sessão novamente.":"Vaša relácia sa skončila. Znova sa prihláste.",
      "Não foi possível carregar os pedidos. ":"Žiadosti sa nepodarilo načítať. "
    },
    hr: {
      "Ordem de transferência":"Nalog za prijenos","Bem-vindo à sua área pessoal":"Dobro došli u svoje osobno korisničko područje",
      "Conta autenticada":"Račun je potvrđen","Endereço de e-mail:":"Adresa e-pošte:","O meu espaço financeiro":"Moj financijski prostor",
      "NOME DO BANCO":"NAZIV BANKE","IBAN REGISTADO":"REGISTRIRANI IBAN","MONTANTE APROVADO":"ODOBRENI IZNOS",
      "Estado: Aprovado":"Status: Odobreno","Ordem de transferência pendente de ativação":"Nalog za prijenos čeka aktivaciju",
      "RETIRAR":"PODIZANJE","INFORMAÇÕES":"INFORMACIJE","Retirar":"Podizanje","Informações do financiamento":"Informacije o financiranju",
      "Voltar":"Natrag","Os meus pedidos de financiamento":"Moji zahtjevi za financiranje",
      "Consulte todos os detalhes dos pedidos que enviou.":"Pogledajte sve pojedinosti zahtjeva koje ste poslali.",
      "A carregar os seus pedidos...":"Učitavanje vaših zahtjeva...","Nova solicitação de financiamento":"Novi zahtjev za financiranje",
      "Atualizar pedidos":"Osvježi zahtjeve","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — FINANCIJSKA RJEŠENJA",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — financijska stabilnost svakog klijenta",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Korisnik primatelj poziva se da kontaktira INTEREUROPA radi dovršetka aktivacije prijenosa. Nakon toga sredstva će biti dostupna na njegovu bankovnom računu za podizanje.",
      "Nome completo:":"Puno ime:","Idade:":"Dob:","País:":"Država:","Cidade:":"Grad:","Profissão:":"Zanimanje:",
      "Rendimento mensal aproximado:":"Približan mjesečni prihod:","Montante solicitado:":"Traženi iznos:","Montante aprovado:":"Odobreni iznos:",
      "IBAN:":"IBAN:","BIC:":"BIC:","Nome do banco:":"Naziv banke:","Prazo de reembolso:":"Rok otplate:",
      "E-mail de contacto:":"Kontaktna e-adresa:","Telefone / WhatsApp:":"Telefon / WhatsApp:","Finalidade:":"Namjena:",
      "Estado:":"Status:","Data do pedido:":"Datum zahtjeva:","Disponibilidade dos fundos:":"Dostupnost sredstava:",
      "Confirmada no registo":"Potvrđeno u evidenciji","Pendente de confirmação":"Čeka potvrdu","Não indicado":"Nije navedeno","Não indicada":"Nije navedeno",
      "Não disponível":"Nije dostupno","A sua sessão terminou. Inicie sessão novamente.":"Sesija je završila. Ponovno se prijavite.",
      "Não foi possível carregar os pedidos. ":"Nije moguće učitati zahtjeve. "
    },
    fr: {
      "Ordem de transferência":"Ordre de transfert","Bem-vindo à sua área pessoal":"Bienvenue dans votre espace personnel",
      "Conta autenticada":"Compte authentifié","Endereço de e-mail:":"Adresse e-mail :","O meu espaço financeiro":"Mon espace financier",
      "NOME DO BANCO":"NOM DE LA BANQUE","IBAN REGISTADO":"IBAN ENREGISTRÉ","MONTANTE APROVADO":"MONTANT APPROUVÉ",
      "Estado: Aprovado":"Statut : Approuvé","Ordem de transferência pendente de ativação":"Ordre de transfert en attente d’activation",
      "RETIRAR":"RETIRER","INFORMAÇÕES":"INFORMATIONS","Retirar":"Retirer","Informações do financiamento":"Informations sur le financement",
      "Voltar":"Retour","Os meus pedidos de financiamento":"Mes demandes de financement",
      "Consulte todos os detalhes dos pedidos que enviou.":"Consultez tous les détails des demandes que vous avez envoyées.",
      "A carregar os seus pedidos...":"Chargement de vos demandes...","Nova solicitação de financiamento":"Nouvelle demande de financement",
      "Atualizar pedidos":"Actualiser les demandes","INTEREUROPA — SOLUÇÕES FINANCEIRAS":"INTEREUROPA — SOLUTIONS FINANCIÈRES",
      "© 2026 — estabilidade financeira de cada cliente":"© 2026 — stabilité financière de chaque client",
      "O cliente beneficiário é convidado a contactar a INTEREUROPA para finalizar a ativação da transferência, o que disponibilizará os fundos na sua conta bancária para que os possa levantar":"Le client bénéficiaire est invité à contacter INTEREUROPA afin de finaliser l’activation du transfert. Les fonds seront ensuite disponibles sur son compte bancaire pour être retirés.",
      "Nome completo:":"Nom complet :","Idade:":"Âge :","País:":"Pays :","Cidade:":"Ville :","Profissão:":"Profession :",
      "Rendimento mensal aproximado:":"Revenu mensuel approximatif :","Montante solicitado:":"Montant demandé :","Montante aprovado:":"Montant approuvé :",
      "IBAN:":"IBAN :","BIC:":"BIC :","Nome do banco:":"Nom de la banque :","Prazo de reembolso:":"Durée de remboursement :",
      "E-mail de contacto:":"E-mail de contact :","Telefone / WhatsApp:":"Téléphone / WhatsApp :","Finalidade:":"Objet :",
      "Estado:":"Statut :","Data do pedido:":"Date de la demande :","Disponibilidade dos fundos:":"Disponibilité des fonds :",
      "Confirmada no registo":"Confirmée dans le registre","Pendente de confirmação":"En attente de confirmation","Não indicado":"Non indiqué","Não indicada":"Non indiquée",
      "Não disponível":"Non disponible","A sua sessão terminou. Inicie sessão novamente.":"Votre session a expiré. Veuillez vous reconnecter.",
      "Não foi possível carregar os pedidos. ":"Impossible de charger les demandes. "
    }
  };
  for (const [language, entries] of Object.entries(clientPanelTranslations)) Object.assign(translations[language], entries);
  // Compléments de traduction pour l'inscription et le formulaire de demande.
  const applicationPageTranslations = {
  "de": {
    "Consulte o seu e-mail para confirmar a conta.": "Bitte prüfen Sie Ihre E-Mails, um Ihr Konto zu bestätigen.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Füllen Sie Ihre Angaben sorgfältig aus, um Ihren Antrag bei unserem Team einzureichen.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Bitte füllen Sie die erforderlichen Felder aus, um Ihren Antrag einzureichen.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Geben Sie Ihre Bankkontodaten an. Diese Daten werden nur für die ordnungsgemäß mitgeteilten und genehmigten Zwecke verwendet.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Ich willige in die Verarbeitung meiner personenbezogenen Daten und Bankdaten zu den in den Datenschutzhinweisen der verantwortlichen Stelle beschriebenen Zwecken ein.",
    "Informação importante:": "Wichtiger Hinweis:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "Das Absenden dieses Formulars stellt keine Genehmigung dar und garantiert keine Finanzierung. Jede Entscheidung hängt von der Prüfung des Antrags ab.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANZIERUNG",
    "Rendimento mensal aproximado (€)": "Ungefähres monatliches Einkommen (€)",
    "Montante pretendido (€)": "Gewünschter Betrag (€)",
    "Endereço de e-mail": "E-Mail-Adresse",
    "Contacto telefónico / WhatsApp": "Telefonkontakt / WhatsApp",
    "Finalidade do financiamento": "Verwendungszweck der Finanzierung",
    "Dados bancários": "Bankverbindung",
    "Nome do banco": "Name der Bank",
    "Enviar candidatura": "Antrag einreichen",
    "Explique para que pretende utilizar o financiamento...": "Erläutern Sie, wofür Sie die Finanzierung verwenden möchten...",
    "Ex.: PT50...": "Z. B.: PT50...",
    "Código BIC / SWIFT": "BIC-/SWIFT-Code",
    "Nome da instituição bancária": "Name des Kreditinstituts",
    "Todos os direitos reservados.": "Alle Rechte vorbehalten."
  },
  "pl": {
    "Consulte o seu e-mail para confirmar a conta.": "Sprawdź swoją skrzynkę e-mail, aby potwierdzić konto.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Starannie wypełnij swoje dane, aby przesłać wniosek naszemu zespołowi.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Wypełnij wymagane pola, aby złożyć wniosek.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Podaj dane swojego rachunku bankowego. Dane te będą wykorzystywane wyłącznie w należycie wskazanych i zatwierdzonych celach.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Wyrażam zgodę na przetwarzanie moich danych osobowych i bankowych w celach opisanych w informacji o prywatności administratora.",
    "Informação importante:": "Ważna informacja:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "Wysłanie formularza nie oznacza zatwierdzenia ani nie gwarantuje przyznania finansowania. Każda decyzja zależy od analizy wniosku.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANSOWANIE",
    "Rendimento mensal aproximado (€)": "Przybliżony miesięczny dochód (€)",
    "Montante pretendido (€)": "Wnioskowana kwota (€)",
    "Endereço de e-mail": "Adres e-mail",
    "Contacto telefónico / WhatsApp": "Numer telefonu / WhatsApp",
    "Finalidade do financiamento": "Cel finansowania",
    "Dados bancários": "Dane bankowe",
    "Nome do banco": "Nazwa banku",
    "Enviar candidatura": "Wyślij wniosek",
    "Explique para que pretende utilizar o financiamento...": "Wyjaśnij, na co chcesz przeznaczyć finansowanie...",
    "Ex.: PT50...": "Np.: PT50...",
    "Código BIC / SWIFT": "Kod BIC / SWIFT",
    "Nome da instituição bancária": "Nazwa instytucji bankowej",
    "Todos os direitos reservados.": "Wszelkie prawa zastrzeżone."
  },
  "es": {
    "Consulte o seu e-mail para confirmar a conta.": "Consulte su correo electrónico para confirmar la cuenta.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Complete cuidadosamente sus datos para presentar su solicitud a nuestro equipo.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Rellene los campos necesarios para presentar su solicitud.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Indique los datos de su cuenta bancaria. Estos datos se utilizarán únicamente para los fines debidamente comunicados y autorizados.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Autorizo el tratamiento de mis datos personales y bancarios para los fines descritos en la información de privacidad de la entidad responsable.",
    "Informação importante:": "Información importante:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "El envío de este formulario no representa una aprobación ni garantiza la concesión de financiación. Cualquier decisión dependerá del análisis de la solicitud.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANCIACIÓN",
    "Rendimento mensal aproximado (€)": "Ingresos mensuales aproximados (€)",
    "Montante pretendido (€)": "Importe solicitado (€)",
    "Endereço de e-mail": "Correo electrónico",
    "Contacto telefónico / WhatsApp": "Contacto telefónico / WhatsApp",
    "Finalidade do financiamento": "Finalidad de la financiación",
    "Dados bancários": "Datos bancarios",
    "Nome do banco": "Nombre del banco",
    "Enviar candidatura": "Enviar solicitud",
    "Explique para que pretende utilizar o financiamento...": "Explique para qué desea utilizar la financiación...",
    "Ex.: PT50...": "Ej.: PT50...",
    "Código BIC / SWIFT": "Código BIC / SWIFT",
    "Nome da instituição bancária": "Nombre de la entidad bancaria",
    "Todos os direitos reservados.": "Todos los derechos reservados."
  },
  "it": {
    "Consulte o seu e-mail para confirmar a conta.": "Controlla la tua e-mail per confermare l'account.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Compila attentamente i tuoi dati per presentare la richiesta al nostro team.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Compila i campi richiesti per presentare la tua richiesta.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Indica i dati del tuo conto bancario. Questi dati saranno utilizzati esclusivamente per gli scopi debitamente comunicati e autorizzati.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Autorizzo il trattamento dei miei dati personali e bancari per le finalità descritte nell'informativa sulla privacy del titolare.",
    "Informação importante:": "Informazione importante:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "L'invio di questo modulo non costituisce un'approvazione né garantisce la concessione del finanziamento. Ogni decisione dipenderà dall'esame della richiesta.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANZIAMENTO",
    "Rendimento mensal aproximado (€)": "Reddito mensile approssimativo (€)",
    "Montante pretendido (€)": "Importo richiesto (€)",
    "Endereço de e-mail": "Indirizzo e-mail",
    "Contacto telefónico / WhatsApp": "Contatto telefonico / WhatsApp",
    "Finalidade do financiamento": "Finalità del finanziamento",
    "Dados bancários": "Dati bancari",
    "Nome do banco": "Nome della banca",
    "Enviar candidatura": "Invia la richiesta",
    "Explique para que pretende utilizar o financiamento...": "Spiega per quale scopo desideri utilizzare il finanziamento...",
    "Ex.: PT50...": "Es.: PT50...",
    "Código BIC / SWIFT": "Codice BIC / SWIFT",
    "Nome da instituição bancária": "Nome dell'istituto bancario",
    "Todos os direitos reservados.": "Tutti i diritti riservati."
  },
  "el": {
    "Consulte o seu e-mail para confirmar a conta.": "Ελέγξτε το email σας για να επιβεβαιώσετε τον λογαριασμό σας.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Συμπληρώστε προσεκτικά τα στοιχεία σας για να υποβάλετε το αίτημά σας στην ομάδα μας.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Συμπληρώστε τα απαιτούμενα πεδία για να υποβάλετε το αίτημά σας.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Συμπληρώστε τα στοιχεία του τραπεζικού σας λογαριασμού. Θα χρησιμοποιηθούν μόνο για τους σκοπούς που έχουν δεόντως γνωστοποιηθεί και εγκριθεί.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Συναινώ στην επεξεργασία των προσωπικών και τραπεζικών μου δεδομένων για τους σκοπούς που περιγράφονται στην ενημέρωση απορρήτου του υπεύθυνου φορέα.",
    "Informação importante:": "Σημαντική πληροφορία:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "Η υποβολή αυτής της φόρμας δεν αποτελεί έγκριση ούτε εγγυάται τη χορήγηση χρηματοδότησης. Κάθε απόφαση εξαρτάται από την αξιολόγηση του αιτήματος.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · ΧΡΗΜΑΤΟΔΟΤΗΣΗ",
    "Rendimento mensal aproximado (€)": "Κατά προσέγγιση μηνιαίο εισόδημα (€)",
    "Montante pretendido (€)": "Ζητούμενο ποσό (€)",
    "Endereço de e-mail": "Διεύθυνση email",
    "Contacto telefónico / WhatsApp": "Τηλεφωνική επικοινωνία / WhatsApp",
    "Finalidade do financiamento": "Σκοπός χρηματοδότησης",
    "Dados bancários": "Τραπεζικά στοιχεία",
    "Nome do banco": "Όνομα τράπεζας",
    "Enviar candidatura": "Υποβολή αίτησης",
    "Explique para que pretende utilizar o financiamento...": "Εξηγήστε για ποιο σκοπό θέλετε να χρησιμοποιήσετε τη χρηματοδότηση...",
    "Ex.: PT50...": "Π.χ.: PT50...",
    "Código BIC / SWIFT": "Κωδικός BIC / SWIFT",
    "Nome da instituição bancária": "Όνομα τραπεζικού ιδρύματος",
    "Todos os direitos reservados.": "Με την επιφύλαξη παντός δικαιώματος."
  },
  "sk": {
    "Consulte o seu e-mail para confirmar a conta.": "Skontrolujte svoj e-mail a potvrďte účet.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Starostlivo vyplňte svoje údaje a odošlite žiadosť nášmu tímu.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Vyplňte požadované polia na podanie žiadosti.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Uveďte údaje svojho bankového účtu. Tieto údaje sa použijú iba na riadne oznámené a schválené účely.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Súhlasím so spracovaním svojich osobných a bankových údajov na účely uvedené v informáciách o ochrane osobných údajov zodpovedného subjektu.",
    "Informação importante:": "Dôležitá informácia:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "Odoslanie tohto formulára neznamená schválenie ani nezaručuje poskytnutie financovania. Každé rozhodnutie závisí od posúdenia žiadosti.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANCOVANIE",
    "Rendimento mensal aproximado (€)": "Približný mesačný príjem (€)",
    "Montante pretendido (€)": "Požadovaná suma (€)",
    "Endereço de e-mail": "E-mailová adresa",
    "Contacto telefónico / WhatsApp": "Telefónny kontakt / WhatsApp",
    "Finalidade do financiamento": "Účel financovania",
    "Dados bancários": "Bankové údaje",
    "Nome do banco": "Názov banky",
    "Enviar candidatura": "Odoslať žiadosť",
    "Explique para que pretende utilizar o financiamento...": "Vysvetlite, na čo chcete financovanie použiť...",
    "Ex.: PT50...": "Napr.: PT50...",
    "Código BIC / SWIFT": "Kód BIC / SWIFT",
    "Nome da instituição bancária": "Názov bankovej inštitúcie",
    "Todos os direitos reservados.": "Všetky práva vyhradené."
  },
  "hr": {
    "Consulte o seu e-mail para confirmar a conta.": "Provjerite svoju e-poštu kako biste potvrdili račun.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Pažljivo ispunite svoje podatke kako biste podnijeli zahtjev našem timu.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Ispunite obavezna polja kako biste podnijeli zahtjev.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Navedite podatke svog bankovnog računa. Ti će se podaci koristiti samo u propisno navedenе i odobrene svrhe.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Dajem privolu za obradu svojih osobnih i bankovnih podataka u svrhe opisane u obavijesti o privatnosti odgovorne osobe.",
    "Informação importante:": "Važna informacija:",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "Slanje ovog obrasca ne predstavlja odobrenje niti jamči dodjelu financiranja. Svaka odluka ovisi o procjeni zahtjeva.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANCIRANJE",
    "Rendimento mensal aproximado (€)": "Približan mjesečni prihod (€)",
    "Montante pretendido (€)": "Traženi iznos (€)",
    "Endereço de e-mail": "Adresa e-pošte",
    "Contacto telefónico / WhatsApp": "Telefonski kontakt / WhatsApp",
    "Finalidade do financiamento": "Namjena financiranja",
    "Dados bancários": "Bankovni podaci",
    "Nome do banco": "Naziv banke",
    "Enviar candidatura": "Pošalji zahtjev",
    "Explique para que pretende utilizar o financiamento...": "Objasnite za što želite koristiti financiranje...",
    "Ex.: PT50...": "Npr.: PT50...",
    "Código BIC / SWIFT": "BIC / SWIFT kod",
    "Nome da instituição bancária": "Naziv bankovne institucije",
    "Todos os direitos reservados.": "Sva prava pridržana."
  },
  "fr": {
    "Consulte o seu e-mail para confirmar a conta.": "Consultez votre boîte e-mail pour confirmer votre compte.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Renseignez soigneusement vos informations afin de transmettre votre demande à notre équipe.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Veuillez remplir les champs nécessaires pour soumettre votre demande.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Veuillez indiquer les coordonnées de votre compte bancaire. Ces données seront utilisées uniquement aux fins dûment communiquées et autorisées.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "J’autorise le traitement de mes données personnelles et bancaires aux fins décrites dans la notice de confidentialité de l’entité responsable.",
    "Informação importante:": "Information importante :",
    "O envio deste formulário não representa aprovação nem garante a concessão de financiamento. Qualquer decisão dependerá da análise do pedido.": "L’envoi de ce formulaire ne vaut pas approbation et ne garantit pas l’octroi d’un financement. Toute décision dépendra de l’examen de la demande.",
    "INTEREUROPA · FINANCIAMENTO": "INTEREUROPA · FINANCEMENT",
    "Rendimento mensal aproximado (€)": "Revenu mensuel approximatif (€)",
    "Montante pretendido (€)": "Montant souhaité (€)",
    "Endereço de e-mail": "Adresse e-mail",
    "Contacto telefónico / WhatsApp": "Contact téléphonique / WhatsApp",
    "Finalidade do financiamento": "Objet du financement",
    "Dados bancários": "Coordonnées bancaires",
    "Nome do banco": "Nom de la banque",
    "Enviar candidatura": "Envoyer la demande",
    "Explique para que pretende utilizar o financiamento...": "Expliquez à quoi vous souhaitez utiliser le financement...",
    "Ex.: PT50...": "Ex. : PT50...",
    "Código BIC / SWIFT": "Code BIC / SWIFT",
    "Nome da instituição bancária": "Nom de l’établissement bancaire",
    "Todos os direitos reservados.": "Tous droits réservés."
  }
};
  for (const [language, entries] of Object.entries(applicationPageTranslations)) Object.assign(translations[language], entries);
  const extraFormTranslations = {
    de: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Ihr Antrag wurde erfolgreich übermittelt. Bitte warten Sie auf die Kontaktaufnahme unseres Teams.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Alle Rechte vorbehalten."
    },
    pl: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Twoje zgłoszenie zostało pomyślnie wysłane. Poczekaj na kontakt naszego zespołu.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Wszelkie prawa zastrzeżone."
    },
    es: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Su solicitud se ha enviado correctamente. Espere a que nuestro equipo se ponga en contacto con usted.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Todos los derechos reservados."
    },
    it: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "La tua richiesta è stata inviata correttamente. Attendi che il nostro team ti contatti.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Tutti i diritti riservati."
    },
    el: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Το αίτημά σας υποβλήθηκε με επιτυχία. Περιμένετε να επικοινωνήσει μαζί σας η ομάδα μας.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Με την επιφύλαξη παντός δικαιώματος."
    },
    sk: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Vaša žiadosť bola úspešne odoslaná. Počkajte, kým vás bude kontaktovať náš tím.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Všetky práva vyhradené."
    },
    hr: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Vaš je zahtjev uspješno zaprimljen. Pričekajte da vas kontaktira naš tim.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Sva prava pridržana."
    },
    fr: {
      "O seu pedido foi recebido com sucesso. Aguarde o contacto da nossa equipa.": "Votre demande a bien été reçue. Veuillez attendre que notre équipe vous contacte.",
      "© 2026 INTEREUROPA. Todos os direitos reservados.": "© 2026 INTEREUROPA. Tous droits réservés."
    }
  };
  for (const [language, entries] of Object.entries(extraFormTranslations)) Object.assign(translations[language], entries);
  const key = "intereuropa_language";
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  const getLang = () => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    return (urlLang && languages[urlLang] ? urlLang : localStorage.getItem(key)) || "pt";
  };
  function translateText(value, dict) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const normalized = trimmed.replace(/\\s+/g, " ");
    const leading = value.match(/^\\s*/)[0];
    const trailing = value.match(/\\s*$/)[0];
    if (dict[normalized]) return leading + dict[normalized] + trailing;
    for (const source of Object.keys(dict)) {
      if (normalized.startsWith(source) && source.endsWith(":")) {
        return leading + dict[source] + normalized.slice(source.length) + trailing;
      }
    }
    return value;
  }
  function applyLanguage(lang) {
    if (!languages[lang]) lang = "pt";
    localStorage.setItem(key, lang);
    document.documentElement.lang = languages[lang][1];
    const dict = translations[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement && !node.parentElement.closest("script,style,select,option")) nodes.push(node);
    }
    nodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      node.nodeValue = translateText(originalTextNodes.get(node), dict);
    });
    document.querySelectorAll("input,textarea,button,a,img").forEach(el => {
      ["placeholder","title","alt"].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        let originals = originalAttributes.get(el);
        if (!originals) { originals = {}; originalAttributes.set(el, originals); }
        if (!(attr in originals)) originals[attr] = el.getAttribute(attr);
        el.setAttribute(attr, translateText(originals[attr], dict));
      });
    });
    const selector = document.getElementById("intereuropa-language");
    if (selector) selector.value = lang;
  }
  function installSelector() {
    const header = document.querySelector("header");
    if (!header || document.getElementById("intereuropa-language")) return;
    const wrap = document.createElement("label");
    wrap.className = "intereuropa-language-wrap";
    wrap.setAttribute("aria-label", "Language / Idioma");
    const select = document.createElement("select");
    select.id = "intereuropa-language";
    select.setAttribute("aria-label", "Selecionar idioma");
    Object.entries(languages).forEach(([code, info]) => {
      const option = document.createElement("option");
      option.value = code; option.textContent = info[0]; select.appendChild(option);
    });
    select.addEventListener("change", () => {
      applyLanguage(select.value);
    });
    wrap.appendChild(select); header.appendChild(wrap);
    const style = document.createElement("style");
    style.textContent = ".intereuropa-language-wrap{display:inline-flex;align-items:center;margin:8px 12px}.intereuropa-language-wrap select{padding:8px 10px;border:1px solid #b9c4d3;border-radius:8px;background:#fff;color:#14243a;font:inherit;max-width:145px}";
    document.head.appendChild(style);
  }
  function start() {
    installSelector();
    applyLanguage(getLang());
    const observer = new MutationObserver(() => {
      clearTimeout(window.__intereuropaI18nTimer);
      window.__intereuropaI18nTimer = setTimeout(() => applyLanguage(getLang()), 80);
    });
    observer.observe(document.body, {childList:true,subtree:true,characterData:true});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();