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
  const key = "intereuropa_language";
  const getLang = () => localStorage.getItem(key) || "pt";
  function translateText(value, dict) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    if (dict[trimmed]) return value.replace(trimmed, dict[trimmed]);
    for (const source of Object.keys(dict)) {
      if (trimmed.startsWith(source) && source.endsWith(":")) return value.replace(source, dict[source]);
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
    nodes.forEach(node => { node.nodeValue = translateText(node.nodeValue, dict); });
    document.querySelectorAll("input,textarea,button,a,img").forEach(el => {
      ["placeholder","title","alt"].forEach(attr => {
        if (el.hasAttribute(attr)) el.setAttribute(attr, translateText(el.getAttribute(attr), dict));
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
    select.addEventListener("change", () => { localStorage.setItem(key, select.value); location.reload(); });
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