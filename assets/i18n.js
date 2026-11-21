(() => {
  const languages = {
    pt: ["Português", "pt-PT"], de: ["Deutsch", "de-DE"], pl: ["Polski", "pl-PL"],
    es: ["Español", "es-ES"], it: ["Italiano", "it-IT"], el: ["Ελληνικά", "el-GR"],
    sk: ["Slovenčina", "sk-SK"], hr: ["Hrvatski", "hr-HR"], fr: ["Français", "fr-FR"]
  };
  const translations = {
    pt: {},
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
      "Finalidade do financiamento":"Účel financovania","IBAN":"IBAN","BIC / SWIFT":"BIC / SWIFT","Nome do banco":"Názov banky",
      "Informação importante:":"Dôležitá informácia:",
      "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.":"Každé rozhodnutie závisí od individuálneho posúdenia a podmienok oznámených pred uzatvorením zmluvy. V prípade schválenia môže byť financovanie poskytnuté v čo najkratšom čase."
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

  // Traductions du nouveau tableau de bord mobile du financement approuvé.
  const approvedDashboardTranslations = {
    pt: {
      "Bonjour,":"Olá,","Bienvenue dans votre espace personnel":"Bem-vindo à sua área pessoal",
      "Financement approuvé":"Financiamento aprovado","Montant approuvé":"Montante aprovado","Statut :":"Estado:",
      "Approuvé":"Aprovado","Mon compte":"A minha conta","En attente d’activation":"A aguardar ativação",
      "Mes transactions":"As minhas transações","Voir tout":"Ver tudo","Vos prochaines transactions":"As suas próximas transações",
      "vont s'afficher ici.":"serão apresentadas aqui.","Accueil":"Início","Faire un virement":"Fazer uma transferência",
      "Historique":"Histórico","Aide":"Ajuda"
    },
    de: {
      "Bonjour,":"Guten Tag,","Bienvenue dans votre espace personnel":"Willkommen in Ihrem persönlichen Bereich",
      "Financement approuvé":"Finanzierung genehmigt","Montant approuvé":"Genehmigter Betrag","Statut :":"Status:",
      "Approuvé":"Genehmigt","Mon compte":"Mein Konto","En attente d’activation":"Wartet auf Aktivierung",
      "Mes transactions":"Meine Transaktionen","Voir tout":"Alle anzeigen","Vos prochaines transactions":"Ihre nächsten Transaktionen",
      "vont s'afficher ici.":"werden hier angezeigt.","Accueil":"Startseite","Faire un virement":"Überweisung tätigen",
      "Historique":"Verlauf","Aide":"Hilfe"
    },
    pl: {
      "Bonjour,":"Dzień dobry,","Bienvenue dans votre espace personnel":"Witamy w Twojej strefie klienta",
      "Financement approuvé":"Finansowanie zatwierdzone","Montant approuvé":"Zatwierdzona kwota","Statut :":"Status:",
      "Approuvé":"Zatwierdzono","Mon compte":"Moje konto","En attente d’activation":"Oczekuje na aktywację",
      "Mes transactions":"Moje transakcje","Voir tout":"Zobacz wszystko","Vos prochaines transactions":"Twoje następne transakcje",
      "vont s'afficher ici.":"będą wyświetlane tutaj.","Accueil":"Strona główna","Faire un virement":"Wykonaj przelew",
      "Historique":"Historia","Aide":"Pomoc"
    },
    es: {
      "Bonjour,":"¡Hola!","Bienvenue dans votre espace personnel":"Bienvenido a su espacio personal",
      "Financement approuvé":"Financiación aprobada","Montant approuvé":"Importe aprobado","Statut :":"Estado:",
      "Approuvé":"Aprobado","Mon compte":"Mi cuenta","En attente d’activation":"Pendiente de activación",
      "Mes transactions":"Mis transacciones","Voir tout":"Ver todo","Vos prochaines transactions":"Sus próximas transacciones",
      "vont s'afficher ici.":"se mostrarán aquí.","Accueil":"Inicio","Faire un virement":"Hacer una transferencia",
      "Historique":"Historial","Aide":"Ayuda"
    },
    it: {
      "Bonjour,":"Buongiorno,","Bienvenue dans votre espace personnel":"Benvenuto nella tua area personale",
      "Financement approuvé":"Finanziamento approvato","Montant approuvé":"Importo approvato","Statut :":"Stato:",
      "Approuvé":"Approvato","Mon compte":"Il mio conto","En attente d’activation":"In attesa di attivazione",
      "Mes transactions":"Le mie transazioni","Voir tout":"Vedi tutto","Vos prochaines transactions":"Le tue prossime transazioni",
      "vont s'afficher ici.":"saranno visualizzate qui.","Accueil":"Home","Faire un virement":"Effettua un bonifico",
      "Historique":"Cronologia","Aide":"Aiuto"
    },
    el: {
      "Bonjour,":"Γεια σας,","Bienvenue dans votre espace personnel":"Καλώς ήρθατε στον προσωπικό σας χώρο",
      "Financement approuvé":"Η χρηματοδότηση εγκρίθηκε","Montant approuvé":"Εγκεκριμένο ποσό","Statut :":"Κατάσταση:",
      "Approuvé":"Εγκρίθηκε","Mon compte":"Ο λογαριασμός μου","En attente d’activation":"Σε αναμονή ενεργοποίησης",
      "Mes transactions":"Οι συναλλαγές μου","Voir tout":"Προβολή όλων","Vos prochaines transactions":"Οι επόμενες συναλλαγές σας",
      "vont s'afficher ici.":"θα εμφανίζονται εδώ.","Accueil":"Αρχική","Faire un virement":"Πραγματοποίηση μεταφοράς",
      "Historique":"Ιστορικό","Aide":"Βοήθεια"
    },
    sk: {
      "Bonjour,":"Dobrý deň,","Bienvenue dans votre espace personnel":"Vitajte vo svojom osobnom priestore",
      "Financement approuvé":"Financovanie schválené","Montant approuvé":"Schválená suma","Statut :":"Stav:",
      "Approuvé":"Schválené","Mon compte":"Môj účet","En attente d’activation":"Čaká na aktiváciu",
      "Mes transactions":"Moje transakcie","Voir tout":"Zobraziť všetko","Vos prochaines transactions":"Vaše ďalšie transakcie",
      "vont s'afficher ici.":"sa zobrazia tu.","Accueil":"Domov","Faire un virement":"Uskutočniť prevod",
      "Historique":"História","Aide":"Pomoc"
    },
    hr: {
      "Bonjour,":"Pozdrav,","Bienvenue dans votre espace personnel":"Dobro došli u svoj osobni prostor",
      "Financement approuvé":"Financiranje odobreno","Montant approuvé":"Odobreni iznos","Statut :":"Status:",
      "Approuvé":"Odobreno","Mon compte":"Moj račun","En attente d’activation":"Čeka aktivaciju",
      "Mes transactions":"Moje transakcije","Voir tout":"Pogledaj sve","Vos prochaines transactions":"Vaše sljedeće transakcije",
      "vont s'afficher ici.":"prikazat će se ovdje.","Accueil":"Početna","Faire un virement":"Izvrši prijenos",
      "Historique":"Povijest","Aide":"Pomoć"
    },
    fr: {
      "Bonjour,":"Bonjour,","Bienvenue dans votre espace personnel":"Bienvenue dans votre espace personnel",
      "Financement approuvé":"Financement approuvé","Montant approuvé":"Montant approuvé","Statut :":"Statut:",
      "Approuvé":"Approuvé","Mon compte":"Mon compte","En attente d’activation":"En attente d’activation",
      "Mes transactions":"Mes transactions","Voir tout":"Voir tout","Vos prochaines transactions":"Vos prochaines transactions",
      "vont s'afficher ici.":"vont s'afficher ici.","Accueil":"Accueil","Faire un virement":"Faire un virement",
      "Historique":"Historique","Aide":"Aide"
    }
  };
  for (const [language, entries] of Object.entries(approvedDashboardTranslations)) Object.assign(translations[language], entries);

  // Compléments de traduction pour l'inscription et le formulaire de demande.
  const applicationPageTranslations = {
  "de": {
    "Consulte o seu e-mail para confirmar a conta.": "Bitte prüfen Sie Ihre E-Mails, um Ihr Konto zu bestätigen.",
    "Preencha cuidadosamente os seus dados para apresentar o seu pedido à nossa equipa.": "Füllen Sie Ihre Angaben sorgfältig aus, um Ihren Antrag bei unserem Team einzureichen.",
    "Preencha os campos necessários para apresentar o seu pedido.": "Bitte füllen Sie die erforderlichen Felder aus, um Ihren Antrag einzureichen.",
    "Indique os dados da sua conta bancária. Estes dados serão utilizados apenas para os fins devidamente informados e autorizados.": "Geben Sie Ihre Bankkontodaten an. Diese Daten werden nur für die ordnungsgemäß mitgeteilten und genehmigten Zwecke verwendet.",
    "Autorizo o tratamento dos meus dados pessoais e bancários para os fins descritos na informação de privacidade da entidade responsável.": "Ich willige in die Verarbeitung meiner personenbezogenen Daten und Bankdaten zu den in den Datenschutzhinweisen der verantwortlichen Stelle beschriebenen Zwecken ein.",
    "Informação importante:": "Wichtiger Hinweis:",
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Jede Entscheidung hängt von einer individuellen Prüfung und den vor Vertragsabschluss mitgeteilten Bedingungen ab. Im Falle einer Genehmigung kann die Finanzierung so schnell wie möglich bereitgestellt werden.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Każda decyzja zależy od indywidualnej analizy oraz warunków przekazanych przed zawarciem umowy. W przypadku pozytywnej decyzji finansowanie może zostać uruchomione tak szybko, jak to możliwe.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Toda decisión depende de un análisis individual y de las condiciones comunicadas antes de cualquier contrato. En caso de aprobación, la financiación podrá ponerse a disposición lo antes posible.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Ogni decisione dipende da una valutazione individuale e dalle condizioni comunicate prima di qualsiasi contratto. In caso di approvazione, il finanziamento potrà essere erogato nel più breve tempo possibile.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Κάθε απόφαση εξαρτάται από ατομική αξιολόγηση και από τους όρους που γνωστοποιούνται πριν από οποιαδήποτε σύμβαση. Σε περίπτωση έγκρισης, η χρηματοδότηση μπορεί να τεθεί στη διάθεσή σας το συντομότερο δυνατό.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Každé rozhodnutie závisí od individuálneho posúdenia a podmienok oznámených pred uzatvorením zmluvy. V prípade schválenia môže byť financovanie poskytnuté v čo najkratšom čase.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Svaka odluka ovisi o pojedinačnoj procjeni i uvjetima priopćenima prije sklapanja ugovora. U slučaju odobrenja, financiranje se može staviti na raspolaganje u najkraćem mogućem roku.",
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
    "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.": "Toute décision dépend d’une analyse individuelle et des conditions communiquées avant tout contrat. En cas d’approbation, le financement pourra être mis en place dans les meilleurs délais.",
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
  const adminTranslations = {
  "de": {
    "PAINEL DE ADMINISTRAÇÃO": "ADMINISTRATIONSBEREICH",
    "Gestão de pedidos": "Antragsverwaltung",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Sehen Sie die eingegangenen Finanzierungsanträge ein und verfolgen Sie deren Bearbeitung.",
    "A verificar a sessão...": "Sitzung wird überprüft...",
    "A carregar...": "Wird geladen...",
    "Atualizar pedidos": "Anfragen aktualisieren",
    "Criar conta de cliente": "Kundenkonto erstellen",
    "Nome completo": "Vollständiger Name",
    "Endereço de e-mail": "E-Mail-Adresse",
    "E-mail do cliente": "E-Mail des Kunden",
    "Enviar convite": "Einladung senden",
    "Clientes registados": "Registrierte Kunden",
    "Lista de todos os clientes que criaram uma conta.": "Liste aller Kunden, die ein Konto erstellt haben.",
    "Atualizar lista de clientes": "Kundenliste aktualisieren",
    "A carregar clientes...": "Kunden werden geladen...",
    "Pedidos de financiamento": "Finanzierungsanträge",
    "Administrador autenticado: ": "Administrator angemeldet: ",
    "Total de clientes registados: ": "Registrierte Kunden insgesamt: ",
    "Ainda não existem clientes registados.": "Es sind noch keine Kunden registriert.",
    "Cliente ": "Kunde ",
    "Não indicado": "Nicht angegeben",
    "Dados bancários": "Bankverbindung",
    "Nome do banco": "Name der Bank",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Genehmigten Betrag ändern (€):",
    "Indique o montante aprovado": "Genehmigten Betrag eingeben",
    "Confirmar disponibilização efetiva dos fundos": "Tatsächliche Bereitstellung der Mittel bestätigen",
    "Prazo de reembolso": "Rückzahlungsfrist",
    "meses": "Monate",
    "E-mail de contacto": "Kontakt-E-Mail",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Verwendungszweck",
    "Estado:": "Status:",
    "Data do pedido": "Antragsdatum",
    "Alterar estado:": "Status ändern:",
    "Recebido": "Eingegangen",
    "Em análise": "In Bearbeitung",
    "Aprovado": "Genehmigt",
    "Recusado": "Abgelehnt",
    "Guardar estado": "Status speichern",
    "A guardar...": "Wird gespeichert...",
    "A verificar a conta de administrador...": "Administratorkonto wird überprüft...",
    "Sessão não encontrada. Inicie sessão novamente.": "Sitzung nicht gefunden. Bitte melden Sie sich erneut an.",
    "Não foi possível verificar a conta.": "Das Konto konnte nicht überprüft werden.",
    "Acesso reservado à administração.": "Zugang nur für die Verwaltung.",
    "Acesso não autorizado.": "Nicht autorisierter Zugriff.",
    "Erro ao carregar clientes: ": "Fehler beim Laden der Kunden: ",
    "Erro desconhecido.": "Unbekannter Fehler.",
    "Total de pedidos: ": "Anträge insgesamt: ",
    "Ainda não existem pedidos registados.": "Es sind noch keine Anträge registriert.",
    "A carregar os pedidos...": "Anträge werden geladen...",
    "Erro ao carregar os pedidos: ": "Fehler beim Laden der Anträge: ",
    "Alterar estado": "Status ändern",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Geben Sie vor der Genehmigung einen gültigen genehmigten Betrag ein.",
    "Não foi possível atualizar: ": "Aktualisierung fehlgeschlagen: ",
    "Estado atualizado com sucesso.": "Status erfolgreich aktualisiert.",
    "Preencha o nome e o e-mail.": "Bitte geben Sie Name und E-Mail-Adresse ein.",
    "A enviar o convite...": "Einladung wird gesendet...",
    "Erro ao enviar o convite: ": "Fehler beim Senden der Einladung: ",
    "Convite enviado com sucesso.": "Einladung erfolgreich gesendet.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Finanzlösungen."
  },
  "pl": {
    "PAINEL DE ADMINISTRAÇÃO": "PANEL ADMINISTRACYJNY",
    "Gestão de pedidos": "Zarządzanie wnioskami",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Przeglądaj otrzymane wnioski o finansowanie i śledź ich status.",
    "A verificar a sessão...": "Sprawdzanie sesji...",
    "A carregar...": "Ładowanie...",
    "Atualizar pedidos": "Odśwież wnioski",
    "Criar conta de cliente": "Utwórz konto klienta",
    "Nome completo": "Imię i nazwisko",
    "Endereço de e-mail": "Adres e-mail",
    "E-mail do cliente": "E-mail klienta",
    "Enviar convite": "Wyślij zaproszenie",
    "Clientes registados": "Zarejestrowani klienci",
    "Lista de todos os clientes que criaram uma conta.": "Lista wszystkich klientów, którzy utworzyli konto.",
    "Atualizar lista de clientes": "Odśwież listę klientów",
    "A carregar clientes...": "Ładowanie klientów...",
    "Pedidos de financiamento": "Wnioski o finansowanie",
    "Administrador autenticado: ": "Zalogowany administrator: ",
    "Total de clientes registados: ": "Łączna liczba zarejestrowanych klientów: ",
    "Ainda não existem clientes registados.": "Nie ma jeszcze zarejestrowanych klientów.",
    "Cliente ": "Klient ",
    "Não indicado": "Nie podano",
    "Dados bancários": "Dane bankowe",
    "Nome do banco": "Nazwa banku",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Zmień zatwierdzoną kwotę (€):",
    "Indique o montante aprovado": "Wpisz zatwierdzoną kwotę",
    "Confirmar disponibilização efetiva dos fundos": "Potwierdź faktyczne udostępnienie środków",
    "Prazo de reembolso": "Okres spłaty",
    "meses": "miesięcy",
    "E-mail de contacto": "E-mail kontaktowy",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Cel",
    "Estado:": "Status:",
    "Data do pedido": "Data wniosku",
    "Alterar estado:": "Zmień status:",
    "Recebido": "Otrzymano",
    "Em análise": "W trakcie analizy",
    "Aprovado": "Zatwierdzono",
    "Recusado": "Odrzucono",
    "Guardar estado": "Zapisz status",
    "A guardar...": "Zapisywanie...",
    "A verificar a conta de administrador...": "Sprawdzanie konta administratora...",
    "Sessão não encontrada. Inicie sessão novamente.": "Nie znaleziono sesji. Zaloguj się ponownie.",
    "Não foi possível verificar a conta.": "Nie można zweryfikować konta.",
    "Acesso reservado à administração.": "Dostęp tylko dla administratora.",
    "Acesso não autorizado.": "Brak autoryzacji dostępu.",
    "Erro ao carregar clientes: ": "Błąd ładowania klientów: ",
    "Erro desconhecido.": "Nieznany błąd.",
    "Total de pedidos: ": "Łączna liczba wniosków: ",
    "Ainda não existem pedidos registados.": "Nie ma jeszcze zarejestrowanych wniosków.",
    "A carregar os pedidos...": "Ładowanie wniosków...",
    "Erro ao carregar os pedidos: ": "Błąd ładowania wniosków: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Przed zatwierdzeniem wniosku podaj prawidłową zatwierdzoną kwotę.",
    "Não foi possível atualizar: ": "Nie można zaktualizować: ",
    "Estado atualizado com sucesso.": "Status został pomyślnie zaktualizowany.",
    "Preencha o nome e o e-mail.": "Wpisz imię i adres e-mail.",
    "A enviar o convite...": "Wysyłanie zaproszenia...",
    "Erro ao enviar o convite: ": "Błąd wysyłania zaproszenia: ",
    "Convite enviado com sucesso.": "Zaproszenie zostało wysłane.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Rozwiązania finansowe."
  },
  "es": {
    "PAINEL DE ADMINISTRAÇÃO": "PANEL DE ADMINISTRACIÓN",
    "Gestão de pedidos": "Gestión de solicitudes",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Consulte y haga seguimiento de las solicitudes de financiación recibidas.",
    "A verificar a sessão...": "Verificando la sesión...",
    "A carregar...": "Cargando...",
    "Atualizar pedidos": "Actualizar solicitudes",
    "Criar conta de cliente": "Crear cuenta de cliente",
    "Nome completo": "Nombre completo",
    "Endereço de e-mail": "Dirección de correo electrónico",
    "E-mail do cliente": "Correo electrónico del cliente",
    "Enviar convite": "Enviar invitación",
    "Clientes registados": "Clientes registrados",
    "Lista de todos os clientes que criaram uma conta.": "Lista de todos los clientes que han creado una cuenta.",
    "Atualizar lista de clientes": "Actualizar lista de clientes",
    "A carregar clientes...": "Cargando clientes...",
    "Pedidos de financiamento": "Solicitudes de financiación",
    "Administrador autenticado: ": "Administrador autenticado: ",
    "Total de clientes registados: ": "Total de clientes registrados: ",
    "Ainda não existem clientes registados.": "Todavía no hay clientes registrados.",
    "Cliente ": "Cliente ",
    "Não indicado": "No indicado",
    "Dados bancários": "Datos bancarios",
    "Nome do banco": "Nombre del banco",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Cambiar importe aprobado (€):",
    "Indique o montante aprovado": "Indique el importe aprobado",
    "Confirmar disponibilização efetiva dos fundos": "Confirmar la disponibilidad efectiva de los fondos",
    "Prazo de reembolso": "Plazo de devolución",
    "meses": "meses",
    "E-mail de contacto": "Correo electrónico de contacto",
    "Telefone / WhatsApp": "Teléfono / WhatsApp",
    "Finalidade": "Finalidad",
    "Estado:": "Estado:",
    "Data do pedido": "Fecha de la solicitud",
    "Alterar estado:": "Cambiar estado:",
    "Recebido": "Recibido",
    "Em análise": "En análisis",
    "Aprovado": "Aprobado",
    "Recusado": "Rechazado",
    "Guardar estado": "Guardar estado",
    "A guardar...": "Guardando...",
    "A verificar a conta de administrador...": "Verificando la cuenta de administrador...",
    "Sessão não encontrada. Inicie sessão novamente.": "No se encontró la sesión. Inicie sesión de nuevo.",
    "Não foi possível verificar a conta.": "No se pudo verificar la cuenta.",
    "Acesso reservado à administração.": "Acceso reservado a la administración.",
    "Acesso não autorizado.": "Acceso no autorizado.",
    "Erro ao carregar clientes: ": "Error al cargar clientes: ",
    "Erro desconhecido.": "Error desconocido.",
    "Total de pedidos: ": "Total de solicitudes: ",
    "Ainda não existem pedidos registados.": "Todavía no hay solicitudes registradas.",
    "A carregar os pedidos...": "Cargando solicitudes...",
    "Erro ao carregar os pedidos: ": "Error al cargar las solicitudes: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Indique un importe aprobado válido antes de aprobar la solicitud.",
    "Não foi possível atualizar: ": "No se pudo actualizar: ",
    "Estado atualizado com sucesso.": "Estado actualizado correctamente.",
    "Preencha o nome e o e-mail.": "Complete el nombre y el correo electrónico.",
    "A enviar o convite...": "Enviando la invitación...",
    "Erro ao enviar o convite: ": "Error al enviar la invitación: ",
    "Convite enviado com sucesso.": "Invitación enviada correctamente.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Soluciones financieras."
  },
  "it": {
    "PAINEL DE ADMINISTRAÇÃO": "PANNELLO DI AMMINISTRAZIONE",
    "Gestão de pedidos": "Gestione delle richieste",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Consulta e monitora le richieste di finanziamento ricevute.",
    "A verificar a sessão...": "Verifica della sessione...",
    "A carregar...": "Caricamento...",
    "Atualizar pedidos": "Aggiorna richieste",
    "Criar conta de cliente": "Crea account cliente",
    "Nome completo": "Nome completo",
    "Endereço de e-mail": "Indirizzo e-mail",
    "E-mail do cliente": "E-mail del cliente",
    "Enviar convite": "Invia invito",
    "Clientes registados": "Clienti registrati",
    "Lista de todos os clientes que criaram uma conta.": "Elenco di tutti i clienti che hanno creato un account.",
    "Atualizar lista de clientes": "Aggiorna elenco clienti",
    "A carregar clientes...": "Caricamento clienti...",
    "Pedidos de financiamento": "Richieste di finanziamento",
    "Administrador autenticado: ": "Amministratore autenticato: ",
    "Total de clientes registados: ": "Totale clienti registrati: ",
    "Ainda não existem clientes registados.": "Non ci sono ancora clienti registrati.",
    "Cliente ": "Cliente ",
    "Não indicado": "Non indicato",
    "Dados bancários": "Dati bancari",
    "Nome do banco": "Nome della banca",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Modifica importo approvato (€):",
    "Indique o montante aprovado": "Inserisci l'importo approvato",
    "Confirmar disponibilização efetiva dos fundos": "Confermare l'effettiva disponibilità dei fondi",
    "Prazo de reembolso": "Durata del rimborso",
    "meses": "mesi",
    "E-mail de contacto": "E-mail di contatto",
    "Telefone / WhatsApp": "Telefono / WhatsApp",
    "Finalidade": "Finalità",
    "Estado:": "Stato:",
    "Data do pedido": "Data della richiesta",
    "Alterar estado:": "Modifica stato:",
    "Recebido": "Ricevuto",
    "Em análise": "In analisi",
    "Aprovado": "Approvato",
    "Recusado": "Rifiutato",
    "Guardar estado": "Salva stato",
    "A guardar...": "Salvataggio...",
    "A verificar a conta de administrador...": "Verifica dell'account amministratore...",
    "Sessão não encontrada. Inicie sessão novamente.": "Sessione non trovata. Accedi nuovamente.",
    "Não foi possível verificar a conta.": "Impossibile verificare l'account.",
    "Acesso reservado à administração.": "Accesso riservato all'amministrazione.",
    "Acesso não autorizado.": "Accesso non autorizzato.",
    "Erro ao carregar clientes: ": "Errore nel caricamento dei clienti: ",
    "Erro desconhecido.": "Errore sconosciuto.",
    "Total de pedidos: ": "Totale richieste: ",
    "Ainda não existem pedidos registados.": "Non ci sono ancora richieste registrate.",
    "A carregar os pedidos...": "Caricamento richieste...",
    "Erro ao carregar os pedidos: ": "Errore nel caricamento delle richieste: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Inserisci un importo approvato valido prima di approvare la richiesta.",
    "Não foi possível atualizar: ": "Impossibile aggiornare: ",
    "Estado atualizado com sucesso.": "Stato aggiornato correttamente.",
    "Preencha o nome e o e-mail.": "Inserisci nome e indirizzo e-mail.",
    "A enviar o convite...": "Invio dell'invito...",
    "Erro ao enviar o convite: ": "Errore nell'invio dell'invito: ",
    "Convite enviado com sucesso.": "Invito inviato correttamente.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Soluzioni finanziarie."
  },
  "el": {
    "PAINEL DE ADMINISTRAÇÃO": "ΠΙΝΑΚΑΣ ΔΙΑΧΕΙΡΙΣΗΣ",
    "Gestão de pedidos": "Διαχείριση αιτημάτων",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Δείτε και παρακολουθήστε τα αιτήματα χρηματοδότησης που έχετε λάβει.",
    "A verificar a sessão...": "Έλεγχος συνεδρίας...",
    "A carregar...": "Φόρτωση...",
    "Atualizar pedidos": "Ανανέωση αιτημάτων",
    "Criar conta de cliente": "Δημιουργία λογαριασμού πελάτη",
    "Nome completo": "Ονοματεπώνυμο",
    "Endereço de e-mail": "Διεύθυνση email",
    "E-mail do cliente": "Email πελάτη",
    "Enviar convite": "Αποστολή πρόσκλησης",
    "Clientes registados": "Εγγεγραμμένοι πελάτες",
    "Lista de todos os clientes que criaram uma conta.": "Λίστα όλων των πελατών που δημιούργησαν λογαριασμό.",
    "Atualizar lista de clientes": "Ανανέωση λίστας πελατών",
    "A carregar clientes...": "Φόρτωση πελατών...",
    "Pedidos de financiamento": "Αιτήματα χρηματοδότησης",
    "Administrador autenticado: ": "Συνδεδεμένος διαχειριστής: ",
    "Total de clientes registados: ": "Σύνολο εγγεγραμμένων πελατών: ",
    "Ainda não existem clientes registados.": "Δεν υπάρχουν ακόμη εγγεγραμμένοι πελάτες.",
    "Cliente ": "Πελάτης ",
    "Não indicado": "Δεν δηλώθηκε",
    "Dados bancários": "Τραπεζικά στοιχεία",
    "Nome do banco": "Όνομα τράπεζας",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Αλλαγή εγκεκριμένου ποσού (€):",
    "Indique o montante aprovado": "Εισαγάγετε το εγκεκριμένο ποσό",
    "Confirmar disponibilização efetiva dos fundos": "Επιβεβαίωση πραγματικής διάθεσης των κεφαλαίων",
    "Prazo de reembolso": "Προθεσμία αποπληρωμής",
    "meses": "μήνες",
    "E-mail de contacto": "Email επικοινωνίας",
    "Telefone / WhatsApp": "Τηλέφωνο / WhatsApp",
    "Finalidade": "Σκοπός",
    "Estado:": "Κατάσταση:",
    "Data do pedido": "Ημερομηνία αιτήματος",
    "Alterar estado:": "Αλλαγή κατάστασης:",
    "Recebido": "Παραλήφθηκε",
    "Em análise": "Υπό εξέταση",
    "Aprovado": "Εγκρίθηκε",
    "Recusado": "Απορρίφθηκε",
    "Guardar estado": "Αποθήκευση κατάστασης",
    "A guardar...": "Αποθήκευση...",
    "A verificar a conta de administrador...": "Έλεγχος λογαριασμού διαχειριστή...",
    "Sessão não encontrada. Inicie sessão novamente.": "Δεν βρέθηκε συνεδρία. Συνδεθείτε ξανά.",
    "Não foi possível verificar a conta.": "Δεν ήταν δυνατή η επαλήθευση του λογαριασμού.",
    "Acesso reservado à administração.": "Πρόσβαση μόνο για τη διαχείριση.",
    "Acesso não autorizado.": "Μη εξουσιοδοτημένη πρόσβαση.",
    "Erro ao carregar clientes: ": "Σφάλμα φόρτωσης πελατών: ",
    "Erro desconhecido.": "Άγνωστο σφάλμα.",
    "Total de pedidos: ": "Σύνολο αιτημάτων: ",
    "Ainda não existem pedidos registados.": "Δεν υπάρχουν ακόμη καταχωρημένα αιτήματα.",
    "A carregar os pedidos...": "Φόρτωση αιτημάτων...",
    "Erro ao carregar os pedidos: ": "Σφάλμα φόρτωσης αιτημάτων: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Εισαγάγετε έγκυρο εγκεκριμένο ποσό πριν εγκρίνετε το αίτημα.",
    "Não foi possível atualizar: ": "Δεν ήταν δυνατή η ενημέρωση: ",
    "Estado atualizado com sucesso.": "Η κατάσταση ενημερώθηκε με επιτυχία.",
    "Preencha o nome e o e-mail.": "Συμπληρώστε το όνομα και το email.",
    "A enviar o convite...": "Αποστολή πρόσκλησης...",
    "Erro ao enviar o convite: ": "Σφάλμα αποστολής πρόσκλησης: ",
    "Convite enviado com sucesso.": "Η πρόσκληση στάλθηκε με επιτυχία.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Χρηματοοικονομικές λύσεις."
  },
  "sk": {
    "PAINEL DE ADMINISTRAÇÃO": "ADMINISTRAČNÝ PANEL",
    "Gestão de pedidos": "Správa žiadostí",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Prezrite si prijaté žiadosti o financovanie a sledujte ich stav.",
    "A verificar a sessão...": "Kontrola relácie...",
    "A carregar...": "Načítava sa...",
    "Atualizar pedidos": "Obnoviť žiadosti",
    "Criar conta de cliente": "Vytvoriť klientsky účet",
    "Nome completo": "Celé meno",
    "Endereço de e-mail": "E-mailová adresa",
    "E-mail do cliente": "E-mail klienta",
    "Enviar convite": "Odoslať pozvánku",
    "Clientes registados": "Registrovaní klienti",
    "Lista de todos os clientes que criaram uma conta.": "Zoznam všetkých klientov, ktorí si vytvorili účet.",
    "Atualizar lista de clientes": "Obnoviť zoznam klientov",
    "A carregar clientes...": "Načítavajú sa klienti...",
    "Pedidos de financiamento": "Žiadosti o financovanie",
    "Administrador autenticado: ": "Prihlásený administrátor: ",
    "Total de clientes registados: ": "Celkový počet registrovaných klientov: ",
    "Ainda não existem clientes registados.": "Zatiaľ nie sú registrovaní žiadni klienti.",
    "Cliente ": "Klient ",
    "Não indicado": "Neuvedené",
    "Dados bancários": "Bankové údaje",
    "Nome do banco": "Názov banky",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Zmeniť schválenú sumu (€):",
    "Indique o montante aprovado": "Zadajte schválenú sumu",
    "Confirmar disponibilização efetiva dos fundos": "Potvrdiť skutočné sprístupnenie finančných prostriedkov",
    "Prazo de reembolso": "Lehota splácania",
    "meses": "mesiacov",
    "E-mail de contacto": "Kontaktný e-mail",
    "Telefone / WhatsApp": "Telefón / WhatsApp",
    "Finalidade": "Účel",
    "Estado:": "Stav:",
    "Data do pedido": "Dátum žiadosti",
    "Alterar estado:": "Zmeniť stav:",
    "Recebido": "Prijaté",
    "Em análise": "V posudzovaní",
    "Aprovado": "Schválené",
    "Recusado": "Zamietnuté",
    "Guardar estado": "Uložiť stav",
    "A guardar...": "Ukladá sa...",
    "A verificar a conta de administrador...": "Kontrola účtu administrátora...",
    "Sessão não encontrada. Inicie sessão novamente.": "Relácia sa nenašla. Prihláste sa znova.",
    "Não foi possível verificar a conta.": "Účet sa nepodarilo overiť.",
    "Acesso reservado à administração.": "Prístup je vyhradený pre administráciu.",
    "Acesso não autorizado.": "Neoprávnený prístup.",
    "Erro ao carregar clientes: ": "Chyba pri načítaní klientov: ",
    "Erro desconhecido.": "Neznáma chyba.",
    "Total de pedidos: ": "Celkový počet žiadostí: ",
    "Ainda não existem pedidos registados.": "Zatiaľ nie sú zaregistrované žiadne žiadosti.",
    "A carregar os pedidos...": "Načítavajú sa žiadosti...",
    "Erro ao carregar os pedidos: ": "Chyba pri načítaní žiadostí: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Pred schválením žiadosti zadajte platnú schválenú sumu.",
    "Não foi possível atualizar: ": "Aktualizácia sa nepodarila: ",
    "Estado atualizado com sucesso.": "Stav bol úspešne aktualizovaný.",
    "Preencha o nome e o e-mail.": "Vyplňte meno a e-mail.",
    "A enviar o convite...": "Odosiela sa pozvánka...",
    "Erro ao enviar o convite: ": "Chyba pri odosielaní pozvánky: ",
    "Convite enviado com sucesso.": "Pozvánka bola úspešne odoslaná.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Finančné riešenia."
  },
  "hr": {
    "PAINEL DE ADMINISTRAÇÃO": "ADMINISTRATORSKA PLOČA",
    "Gestão de pedidos": "Upravljanje zahtjevima",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Pregledajte primljene zahtjeve za financiranje i pratite njihov status.",
    "A verificar a sessão...": "Provjera sesije...",
    "A carregar...": "Učitavanje...",
    "Atualizar pedidos": "Osvježi zahtjeve",
    "Criar conta de cliente": "Izradi korisnički račun",
    "Nome completo": "Puno ime",
    "Endereço de e-mail": "Adresa e-pošte",
    "E-mail do cliente": "E-pošta klijenta",
    "Enviar convite": "Pošalji pozivnicu",
    "Clientes registados": "Registrirani klijenti",
    "Lista de todos os clientes que criaram uma conta.": "Popis svih klijenata koji su izradili račun.",
    "Atualizar lista de clientes": "Osvježi popis klijenata",
    "A carregar clientes...": "Učitavanje klijenata...",
    "Pedidos de financiamento": "Zahtjevi za financiranje",
    "Administrador autenticado: ": "Prijavljeni administrator: ",
    "Total de clientes registados: ": "Ukupan broj registriranih klijenata: ",
    "Ainda não existem clientes registados.": "Još nema registriranih klijenata.",
    "Cliente ": "Klijent ",
    "Não indicado": "Nije navedeno",
    "Dados bancários": "Bankovni podaci",
    "Nome do banco": "Naziv banke",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Promijeni odobreni iznos (€):",
    "Indique o montante aprovado": "Unesite odobreni iznos",
    "Confirmar disponibilização efetiva dos fundos": "Potvrdi stvarnu dostupnost sredstava",
    "Prazo de reembolso": "Rok otplate",
    "meses": "mjeseci",
    "E-mail de contacto": "Kontaktna e-pošta",
    "Telefone / WhatsApp": "Telefon / WhatsApp",
    "Finalidade": "Namjena",
    "Estado:": "Status:",
    "Data do pedido": "Datum zahtjeva",
    "Alterar estado:": "Promijeni status:",
    "Recebido": "Zaprimljeno",
    "Em análise": "U obradi",
    "Aprovado": "Odobreno",
    "Recusado": "Odbijeno",
    "Guardar estado": "Spremi status",
    "A guardar...": "Spremanje...",
    "A verificar a conta de administrador...": "Provjera administratorskog računa...",
    "Sessão não encontrada. Inicie sessão novamente.": "Sesija nije pronađena. Prijavite se ponovno.",
    "Não foi possível verificar a conta.": "Nije moguće provjeriti račun.",
    "Acesso reservado à administração.": "Pristup je rezerviran za administraciju.",
    "Acesso não autorizado.": "Neovlašten pristup.",
    "Erro ao carregar clientes: ": "Pogreška pri učitavanju klijenata: ",
    "Erro desconhecido.": "Nepoznata pogreška.",
    "Total de pedidos: ": "Ukupan broj zahtjeva: ",
    "Ainda não existem pedidos registados.": "Još nema registriranih zahtjeva.",
    "A carregar os pedidos...": "Učitavanje zahtjeva...",
    "Erro ao carregar os pedidos: ": "Pogreška pri učitavanju zahtjeva: ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Unesite valjani odobreni iznos prije odobravanja zahtjeva.",
    "Não foi possível atualizar: ": "Ažuriranje nije uspjelo: ",
    "Estado atualizado com sucesso.": "Status je uspješno ažuriran.",
    "Preencha o nome e o e-mail.": "Unesite ime i adresu e-pošte.",
    "A enviar o convite...": "Slanje pozivnice...",
    "Erro ao enviar o convite: ": "Pogreška pri slanju pozivnice: ",
    "Convite enviado com sucesso.": "Pozivnica je uspješno poslana.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Financijska rješenja."
  },
  "fr": {
    "PAINEL DE ADMINISTRAÇÃO": "PANNEAU D’ADMINISTRATION",
    "Gestão de pedidos": "Gestion des demandes",
    "Consulte e acompanhe os pedidos de financiamento recebidos.": "Consultez et suivez les demandes de financement reçues.",
    "A verificar a sessão...": "Vérification de la session...",
    "A carregar...": "Chargement...",
    "Atualizar pedidos": "Actualiser les demandes",
    "Criar conta de cliente": "Créer un compte client",
    "Nome completo": "Nom complet",
    "Endereço de e-mail": "Adresse e-mail",
    "E-mail do cliente": "E-mail du client",
    "Enviar convite": "Envoyer l’invitation",
    "Clientes registados": "Clients inscrits",
    "Lista de todos os clientes que criaram uma conta.": "Liste de tous les clients ayant créé un compte.",
    "Atualizar lista de clientes": "Actualiser la liste des clients",
    "A carregar clientes...": "Chargement des clients...",
    "Pedidos de financiamento": "Demandes de financement",
    "Administrador autenticado: ": "Administrateur connecté : ",
    "Total de clientes registados: ": "Nombre total de clients inscrits : ",
    "Ainda não existem clientes registados.": "Aucun client n’est encore inscrit.",
    "Cliente ": "Client ",
    "Não indicado": "Non renseigné",
    "Dados bancários": "Coordonnées bancaires",
    "Nome do banco": "Nom de la banque",
    "IBAN": "IBAN",
    "BIC / SWIFT": "BIC / SWIFT",
    "Alterar montante aprovado (€):": "Modifier le montant approuvé (€) :",
    "Indique o montante aprovado": "Saisissez le montant approuvé",
    "Confirmar disponibilização efetiva dos fundos": "Confirmer la mise à disposition effective des fonds",
    "Prazo de reembolso": "Durée de remboursement",
    "meses": "mois",
    "E-mail de contacto": "E-mail de contact",
    "Telefone / WhatsApp": "Téléphone / WhatsApp",
    "Finalidade": "Objetif",
    "Estado:": "Statut :",
    "Data do pedido": "Date de la demande",
    "Alterar estado:": "Modifier le statut :",
    "Recebido": "Reçu",
    "Em análise": "En cours d’analyse",
    "Aprovado": "Approuvé",
    "Recusado": "Refusé",
    "Guardar estado": "Enregistrer le statut",
    "A guardar...": "Enregistrement...",
    "A verificar a conta de administrador...": "Vérification du compte administrateur...",
    "Sessão não encontrada. Inicie sessão novamente.": "Session introuvable. Veuillez vous reconnecter.",
    "Não foi possível verificar a conta.": "Impossible de vérifier le compte.",
    "Acesso reservado à administração.": "Accès réservé à l’administration.",
    "Acesso não autorizado.": "Accès non autorisé.",
    "Erro ao carregar clientes: ": "Erreur lors du chargement des clients : ",
    "Erro desconhecido.": "Erreur inconnue.",
    "Total de pedidos: ": "Nombre total de demandes : ",
    "Ainda não existem pedidos registados.": "Aucune demande n’a encore été enregistrée.",
    "A carregar os pedidos...": "Chargement des demandes...",
    "Erro ao carregar os pedidos: ": "Erreur lors du chargement des demandes : ",
    "Indique um montante aprovado válido antes de aprovar o pedido.": "Veuillez saisir un montant approuvé valide avant d’approuver la demande.",
    "Não foi possível atualizar: ": "Impossible de mettre à jour : ",
    "Estado atualizado com sucesso.": "Statut mis à jour avec succès.",
    "Preencha o nome e o e-mail.": "Veuillez renseigner le nom et l’adresse e-mail.",
    "A enviar o convite...": "Envoi de l’invitation...",
    "Erro ao enviar o convite: ": "Erreur lors de l’envoi de l’invitation : ",
    "Convite enviado com sucesso.": "Invitation envoyée avec succès.",
    "© 2026 INTEREUROPA — Soluções Financeiras.": "© 2026 INTEREUROPA — Solutions financières."
  }
};
  Object.assign(adminTranslations.de, {"Rendimento mensal":"Monatliches Einkommen","Alterar montante aprovado (€)":"Genehmigten Betrag ändern (€)","Alterar montante aprovado (€):":"Genehmigten Betrag ändern (€):","Confirmar disponibilização efetiva dos fundos":"Tatsächliche Bereitstellung der Mittel bestätigen","Alterar estado:":"Status ändern:","Recebido":"Eingegangen","Em análise":"In Prüfung","Aprovado":"Genehmigt","Recusado":"Abgelehnt","Guardar estado":"Status speichern","48 meses":"48 Monate","36 meses":"36 Monate","63 meses":"63 Monate","30 meses":"30 Monate","96 meses":"96 Monate","50 meses":"50 Monate","23 meses":"23 Monate","360 meses":"360 Monate"});
  Object.assign(adminTranslations.pl, {"Rendimento mensal":"Miesięczny dochód","Alterar montante aprovado (€)":"Zmień zatwierdzoną kwotę (€)","Alterar montante aprovado (€):":"Zmień zatwierdzoną kwotę (€):","Confirmar disponibilização efetiva dos fundos":"Potwierdź faktyczne udostępnienie środków","Alterar estado:":"Zmień status:","Recebido":"Otrzymano","Em análise":"W trakcie analizy","Aprovado":"Zatwierdzono","Recusado":"Odrzucono","Guardar estado":"Zapisz status","meses":"miesięcy"});
  Object.assign(adminTranslations.es, {"Rendimento mensal":"Ingresos mensuales","Alterar montante aprovado (€)":"Modificar el importe aprobado (€)","Alterar montante aprovado (€):":"Modificar el importe aprobado (€):","Confirmar disponibilização efetiva dos fundos":"Confirmar la puesta a disposición efectiva de los fondos","Alterar estado:":"Cambiar estado:","Recebido":"Recibido","Em análise":"En análisis","Aprovado":"Aprobado","Recusado":"Rechazado","Guardar estado":"Guardar estado","meses":"meses"});
  Object.assign(adminTranslations.it, {"Rendimento mensal":"Reddito mensile","Alterar montante aprovado (€)":"Modifica l'importo approvato (€)","Alterar montante aprovado (€):":"Modifica l'importo approvato (€):","Confirmar disponibilização efetiva dos fundos":"Conferma l'effettiva disponibilità dei fondi","Alterar estado:":"Modifica stato:","Recebido":"Ricevuto","Em análise":"In esame","Aprovado":"Approvato","Recusado":"Rifiutato","Guardar estado":"Salva stato","meses":"mesi"});
  Object.assign(adminTranslations.el, {"Rendimento mensal":"Μηνιαίο εισόδημα","Alterar montante aprovado (€)":"Αλλαγή εγκεκριμένου ποσού (€)","Alterar montante aprovado (€):":"Αλλαγή εγκεκριμένου ποσού (€):","Confirmar disponibilização efetiva dos fundos":"Επιβεβαίωση πραγματικής διάθεσης των κεφαλαίων","Alterar estado:":"Αλλαγή κατάστασης:","Recebido":"Παραλήφθηκε","Em análise":"Υπό εξέταση","Aprovado":"Εγκρίθηκε","Recusado":"Απορρίφθηκε","Guardar estado":"Αποθήκευση κατάστασης","meses":"μήνες"});
  Object.assign(adminTranslations.sk, {"Rendimento mensal":"Mesačný príjem","Alterar montante aprovado (€)":"Zmeniť schválenú sumu (€)","Alterar montante aprovado (€):":"Zmeniť schválenú sumu (€):","Confirmar disponibilização efetiva dos fundos":"Potvrdiť skutočné sprístupnenie finančných prostriedkov","Alterar estado:":"Zmeniť stav:","Recebido":"Prijaté","Em análise":"V posudzovaní","Aprovado":"Schválené","Recusado":"Zamietnuté","Guardar estado":"Uložiť stav","meses":"mesiacov"});
  Object.assign(adminTranslations.hr, {"Rendimento mensal":"Mjesečni prihod","Alterar montante aprovado (€)":"Promijeni odobreni iznos (€)","Alterar montante aprovado (€):":"Promijeni odobreni iznos (€):","Confirmar disponibilização efetiva dos fundos":"Potvrdi stvarnu dostupnost sredstava","Alterar estado:":"Promijeni status:","Recebido":"Zaprimljeno","Em análise":"U obradi","Aprovado":"Odobreno","Recusado":"Odbijeno","Guardar estado":"Spremi status","meses":"mjeseci"});
  Object.assign(adminTranslations.fr, {"Rendimento mensal":"Revenu mensuel","Alterar montante aprovado (€)":"Modifier le montant approuvé (€)","Alterar montante aprovado (€):":"Modifier le montant approuvé (€) :","Confirmar disponibilização efetiva dos fundos":"Confirmer la mise à disposition effective des fonds","Alterar estado:":"Modifier le statut :","Recebido":"Reçu","Em análise":"En cours d’analyse","Aprovado":"Approuvé","Recusado":"Refusé","Guardar estado":"Enregistrer le statut","meses":"mois"});
  for (const [language, entries] of Object.entries(adminTranslations)) Object.assign(translations[language], entries);
  // Tradução dos valores dinâmicos de estado guardados na base de dados.
  // Portuguese is the source language and has no base dictionary; initialize it before extending it.
  translations.pt = translations.pt || {};
  Object.assign(translations.pt, {"reçue":"Recebido","em análise":"Em análise","aprovada":"Aprovado","recusada":"Recusado","Recebido":"Recebido"});
  Object.assign(translations.de, {"reçue":"Eingegangen","em análise":"In Prüfung","aprovada":"Genehmigt","recusada":"Abgelehnt","Recebido":"Eingegangen"});
  Object.assign(translations.pl, {"reçue":"Otrzymano","em análise":"W trakcie analizy","aprovada":"Zatwierdzono","recusada":"Odrzucono","Recebido":"Otrzymano"});
  Object.assign(translations.es, {"reçue":"Recibido","em análise":"En análisis","aprovada":"Aprobado","recusada":"Rechazado","Recebido":"Recibido"});
  Object.assign(translations.it, {"reçue":"Ricevuto","em análise":"In esame","aprovada":"Approvato","recusada":"Rifiutato","Recebido":"Ricevuto"});
  Object.assign(translations.el, {"reçue":"Παραλήφθηκε","em análise":"Υπό εξέταση","aprovada":"Εγκρίθηκε","recusada":"Απορρίφθηκε","Recebido":"Παραλήφθηκε"});
  Object.assign(translations.sk, {"reçue":"Prijaté","em análise":"V posudzovaní","aprovada":"Schválené","recusada":"Zamietnuté","Recebido":"Prijaté"});
  Object.assign(translations.hr, {"reçue":"Zaprimljeno","em análise":"U obradi","aprovada":"Odobreno","recusada":"Odbijeno","Recebido":"Zaprimljeno"});
  Object.assign(translations.fr, {"reçue":"Reçu","em análise":"En cours d’analyse","aprovada":"Approuvé","recusada":"Refusé","Recebido":"Reçu"});


  // Traduções complementares das páginas inicial, acesso de cliente e administração.
  Object.assign(translations.de, {"Escolha uma das opções para continuar.":"Wählen Sie eine der Optionen, um fortzufahren.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Willkommen bei INTEREUROPA. Entdecken Sie unsere verfügbaren Dienstleistungen und verfolgen Sie Ihre Anträge über den Kundenbereich.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Informieren Sie sich über das Antragsverfahren und reichen Sie einen Antrag zur Prüfung ein.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Greifen Sie auf Ihr Konto zu, sehen Sie Ihre Anträge ein und verfolgen Sie deren Aktualisierungen.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Sehen Sie den Status der über Ihren persönlichen Bereich eingereichten Anträge ein.","Financiamento com responsabilidade":"Verantwortungsvolle Finanzierung","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Alle Anträge werden individuell geprüft. Die Einreichung eines Antrags bedeutet weder eine Genehmigung noch garantiert sie die Bereitstellung einer Finanzierung. Die geltenden Bedingungen müssen vor jedem Vertragsabschluss mitgeteilt werden.","PAINEL DE ADMINISTRAÇÃO":"ADMINISTRATIONSBEREICH","Gestão de pedidos":"Antragsverwaltung","Consulte e acompanhe os pedidos de financiamento recebidos.":"Sehen Sie die eingegangenen Finanzierungsanträge ein und verfolgen Sie deren Bearbeitung.","Administrador autenticado: ":"Angemeldeter Administrator: ","Sessão de administrador ativa.":"Administratorsitzung aktiv.","Menu de administração":"Administrationsmenü","Criar conta de cliente":"Kundenkonto erstellen","Clientes registados":"Registrierte Kunden","Pedidos de financiamento":"Finanzierungsanträge"});
  Object.assign(translations.pl, {"Escolha uma das opções para continuar.":"Wybierz jedną z opcji, aby kontynuować.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Witamy w INTEREUROPA. Poznaj dostępne usługi i śledź swoje wnioski w strefie klienta.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Zapoznaj się z procesem składania wniosku i prześlij go do rozpatrzenia.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Zaloguj się na konto, sprawdź swoje wnioski i śledź ich aktualizacje.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Sprawdź status wniosków złożonych w swoim panelu.","Financiamento com responsabilidade":"Odpowiedzialne finansowanie","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Każdy wniosek podlega indywidualnej analizie. Złożenie wniosku nie oznacza jego zatwierdzenia ani nie gwarantuje udostępnienia finansowania. Obowiązujące warunki muszą zostać przekazane przed zawarciem jakiejkolwiek umowy.","PAINEL DE ADMINISTRAÇÃO":"PANEL ADMINISTRACYJNY","Gestão de pedidos":"Zarządzanie wnioskami","Consulte e acompanhe os pedidos de financiamento recebidos.":"Przeglądaj otrzymane wnioski o finansowanie i śledź ich status.","Administrador autenticado: ":"Zalogowany administrator: ","Sessão de administrador ativa.":"Sesja administratora jest aktywna.","Menu de administração":"Menu administracyjne","Criar conta de cliente":"Utwórz konto klienta","Clientes registados":"Zarejestrowani klienci","Pedidos de financiamento":"Wnioski o finansowanie"});
  Object.assign(translations.es, {"Escolha uma das opções para continuar.":"Elija una de las opciones para continuar.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Bienvenido a INTEREUROPA. Conozca nuestros servicios disponibles y siga sus solicitudes desde el área de cliente.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consulte la información sobre el proceso de solicitud y presente una solicitud para su evaluación.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Acceda a su cuenta, consulte sus solicitudes y siga sus actualizaciones.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consulte el estado de las solicitudes enviadas desde su área personal.","Financiamento com responsabilidade":"Financiación responsable","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Todas las solicitudes están sujetas a una evaluación individual. Presentar una solicitud no supone su aprobación ni garantiza la concesión de financiación. Las condiciones aplicables deben comunicarse antes de cualquier contratación.","PAINEL DE ADMINISTRAÇÃO":"PANEL DE ADMINISTRACIÓN","Gestão de pedidos":"Gestión de solicitudes","Consulte e acompanhe os pedidos de financiamento recebidos.":"Consulte y haga seguimiento de las solicitudes de financiación recibidas.","Administrador autenticado: ":"Administrador autenticado: ","Sessão de administrador ativa.":"Sesión de administrador activa.","Menu de administração":"Menú de administración","Criar conta de cliente":"Crear cuenta de cliente","Clientes registados":"Clientes registrados","Pedidos de financiamento":"Solicitudes de financiación"});
  Object.assign(translations.it, {"Escolha uma das opções para continuar.":"Scegli una delle opzioni per continuare.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Benvenuto su INTEREUROPA. Scopri i servizi disponibili e segui le tue richieste dall’area clienti.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consulta le informazioni sulla procedura di richiesta e invia una domanda per la valutazione.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Accedi al tuo account, consulta le richieste e segui i relativi aggiornamenti.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consulta lo stato delle richieste inviate dalla tua area personale.","Financiamento com responsabilidade":"Finanziamento responsabile","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Tutte le domande sono soggette a una valutazione individuale. La presentazione di una richiesta non equivale a un’approvazione né garantisce la concessione del finanziamento. Le condizioni applicabili devono essere comunicate prima di qualsiasi contratto.","PAINEL DE ADMINISTRAÇÃO":"PANNELLO DI AMMINISTRAZIONE","Gestão de pedidos":"Gestione delle richieste","Consulte e acompanhe os pedidos de financiamento recebidos.":"Consulta e monitora le richieste di finanziamento ricevute.","Administrador autenticado: ":"Amministratore autenticato: ","Sessão de administrador ativa.":"Sessione amministratore attiva.","Menu de administração":"Menu di amministrazione","Criar conta de cliente":"Crea account cliente","Clientes registados":"Clienti registrati","Pedidos de financiamento":"Richieste di finanziamento"});
  Object.assign(translations.el, {"Escolha uma das opções para continuar.":"Επιλέξτε μία από τις διαθέσιμες επιλογές για να συνεχίσετε.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Καλώς ήρθατε στην INTEREUROPA. Ανακαλύψτε τις διαθέσιμες υπηρεσίες μας και παρακολουθήστε τα αιτήματά σας μέσω της περιοχής πελατών.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Ενημερωθείτε για τη διαδικασία αίτησης και υποβάλετε αίτημα για αξιολόγηση.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Αποκτήστε πρόσβαση στον λογαριασμό σας, δείτε τα αιτήματά σας και παρακολουθήστε τις ενημερώσεις τους.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Δείτε την κατάσταση των αιτημάτων που υποβάλατε μέσω του προσωπικού σας χώρου.","Financiamento com responsabilidade":"Υπεύθυνη χρηματοδότηση","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Όλες οι αιτήσεις υπόκεινται σε ατομική αξιολόγηση. Η υποβολή αίτησης δεν συνιστά έγκριση ούτε εγγυάται τη χορήγηση χρηματοδότησης. Οι ισχύοντες όροι πρέπει να γνωστοποιούνται πριν από οποιαδήποτε σύμβαση.","PAINEL DE ADMINISTRAÇÃO":"ΠΙΝΑΚΑΣ ΔΙΑΧΕΙΡΙΣΗΣ","Gestão de pedidos":"Διαχείριση αιτημάτων","Consulte e acompanhe os pedidos de financiamento recebidos.":"Δείτε και παρακολουθήστε τα αιτήματα χρηματοδότησης που έχουν ληφθεί.","Administrador autenticado: ":"Συνδεδεμένος διαχειριστής: ","Sessão de administrador ativa.":"Η συνεδρία διαχειριστή είναι ενεργή.","Menu de administração":"Μενού διαχείρισης","Criar conta de cliente":"Δημιουργία λογαριασμού πελάτη","Clientes registados":"Εγγεγραμμένοι πελάτες","Pedidos de financiamento":"Αιτήματα χρηματοδότησης"});
  Object.assign(translations.sk, {"Escolha uma das opções para continuar.":"Vyberte jednu z možností a pokračujte.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Vitajte v INTEREUROPA. Spoznajte naše dostupné služby a sledujte svoje žiadosti v klientskej zóne.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Prečítajte si informácie o procese žiadosti a odošlite žiadosť na posúdenie.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Prihláste sa do svojho účtu, pozrite si svoje žiadosti a sledujte ich aktualizácie.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Skontrolujte stav žiadostí odoslaných prostredníctvom svojej osobnej zóny.","Financiamento com responsabilidade":"Zodpovedné financovanie","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Všetky žiadosti podliehajú individuálnemu posúdeniu. Podanie žiadosti neznamená schválenie ani nezaručuje poskytnutie financovania. Platné podmienky musia byť oznámené pred uzavretím akejkoľvek zmluvy.","PAINEL DE ADMINISTRAÇÃO":"ADMINISTRAČNÝ PANEL","Gestão de pedidos":"Správa žiadostí","Consulte e acompanhe os pedidos de financiamento recebidos.":"Prezerajte si prijaté žiadosti o financovanie a sledujte ich stav.","Administrador autenticado: ":"Prihlásený správca: ","Sessão de administrador ativa.":"Relácia správcu je aktívna.","Menu de administração":"Ponuka správy","Criar conta de cliente":"Vytvoriť klientsky účet","Clientes registados":"Registrovaní klienti","Pedidos de financiamento":"Žiadosti o financovanie"});
  Object.assign(translations.hr, {"Escolha uma das opções para continuar.":"Odaberite jednu od opcija za nastavak.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Dobro došli u INTEREUROPA. Upoznajte naše dostupne usluge i pratite svoje zahtjeve putem korisničkog područja.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Pogledajte informacije o postupku prijave i podnesite zahtjev na razmatranje.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Pristupite svom računu, pregledajte zahtjeve i pratite njihova ažuriranja.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Provjerite status zahtjeva podnesenih putem svog osobnog područja.","Financiamento com responsabilidade":"Odgovorno financiranje","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Sve prijave podliježu pojedinačnoj procjeni. Podnošenje zahtjeva ne znači odobrenje niti jamči dostupnost financiranja. Primjenjivi uvjeti moraju biti priopćeni prije sklapanja bilo kakvog ugovora.","PAINEL DE ADMINISTRAÇÃO":"ADMINISTRATORSKA PLOČA","Gestão de pedidos":"Upravljanje zahtjevima","Consulte e acompanhe os pedidos de financiamento recebidos.":"Pregledajte primljene zahtjeve za financiranje i pratite njihov status.","Administrador autenticado: ":"Prijavljeni administrator: ","Sessão de administrador ativa.":"Administratorska sesija je aktivna.","Menu de administração":"Administratorski izbornik","Criar conta de cliente":"Izradi korisnički račun","Clientes registados":"Registrirani klijenti","Pedidos de financiamento":"Zahtjevi za financiranje"});
  Object.assign(translations.fr, {"Escolha uma das opções para continuar.":"Choisissez l’une des options pour continuer.","Bem-vindo à INTEREUROPA. Conheça os nossos serviços disponíveis e acompanhe os seus pedidos através da área de cliente.":"Bienvenue chez INTEREUROPA. Découvrez nos services disponibles et suivez vos demandes depuis l’espace client.","Consulte as informações sobre o processo de candidatura e apresente um pedido para análise.":"Consultez les informations sur la procédure de demande et soumettez un dossier pour examen.","Aceda à sua conta, consulte os seus pedidos e acompanhe as respetivas atualizações.":"Accédez à votre compte, consultez vos demandes et suivez leurs mises à jour.","Consulte o estado dos pedidos submetidos através da sua área pessoal.":"Consultez l’état des demandes soumises depuis votre espace personnel.","Financiamento com responsabilidade":"Financement responsable","Todas as candidaturas estão sujeitas a uma análise individual. A apresentação de um pedido não representa uma aprovação nem garante a disponibilização de financiamento. As condições aplicáveis devem ser comunicadas antes de qualquer contratação.":"Toutes les demandes font l’objet d’une analyse individuelle. Le dépôt d’une demande ne vaut pas approbation et ne garantit pas l’octroi d’un financement. Les conditions applicables doivent être communiquées avant toute contractualisation.","PAINEL DE ADMINISTRAÇÃO":"PANNEAU D’ADMINISTRATION","Gestão de pedidos":"Gestion des demandes","Consulte e acompanhe os pedidos de financiamento recebidos.":"Consultez et suivez les demandes de financement reçues.","Administrador autenticado: ":"Administrateur connecté : ","Sessão de administrador ativa.":"Session administrateur active.","Menu de administração":"Menu d’administration","Criar conta de cliente":"Créer un compte client","Clientes registados":"Clients inscrits","Pedidos de financiamento":"Demandes de financement"});

  // Traductions complètes de la page des conditions de financement.
  const financePageTranslations = {
    de: {
      "← Página inicial":"← Startseite","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"ALLGEMEINE BEDINGUNGEN FÜR DIE KREDITVERGABE",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Jeder Finanzierungsantrag unterliegt der Prüfung und Genehmigung des Antrags sowie der Überprüfung der geltenden Bedingungen.",
      "1. Condições de elegibilidade":"1. Voraussetzungen","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Der Antragsteller muss Inhaber eines aktiven persönlichen Bankkontos auf seinen eigenen Namen sein.",
      "É necessário apresentar um documento de identificação válido.":"Ein gültiges Ausweisdokument ist vorzulegen.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"Die Rückzahlungsfähigkeit wird vor jeder Entscheidung geprüft.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Effektiver Jahreszins (APR)","A TAEG indicada para esta simulação é de":"Der für diese Simulation angegebene effektive Jahreszins beträgt",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"Der effektive Jahreszins stellt die jährlichen Gesamtkosten des Kredits einschließlich aller anfallenden Pflichtkosten dar. Der endgültige Wert und sämtliche Bedingungen werden vor Vertragsabschluss mitgeteilt.",
      "3. Montantes e prazos disponíveis":"3. Verfügbare Beträge und Laufzeiten","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Finanzierungsbetrag: 5.000 € bis 1.000.000 €.","Prazo de reembolso: de 12 a 300 meses.":"Rückzahlungsdauer: 12 bis 300 Monate.",
      "4. Simulação de reembolso":"4. Rückzahlungssimulation","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"Die Simulation zeigt eine Schätzung der monatlichen Rate, der Zinsen, des insgesamt zurückzuzahlenden Betrags und der Finanzierungsdauer. Die Ergebnisse dienen nur zur Orientierung, hängen von den eingegebenen Daten ab und stellen weder eine Kreditzusage noch ein Vertragsangebot dar.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Prüfung, Genehmigung und Auszahlung","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Jede Finanzierung setzt eine individuelle Prüfung des Antrags, die Genehmigung durch die zuständige Stelle und den Abschluss der Vertragsformalitäten voraus. Die Mittel können erst nach Vertragsabschluss und Ausführung des Vorgangs durch das Bankinstitut bereitgestellt werden.",
      "6. Transparência e custos":"6. Transparenz und Kosten","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Die Bedingungen, die Gesamtkosten des Kredits sowie etwaige Provisionen oder Gebühren müssen dem Antragsteller vor Vertragsabschluss mitgeteilt werden. Eine Vorauszahlung garantiert keine Genehmigung der Finanzierung.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"MEIN KONTO ERSTELLEN UND FINANZIERUNG BEANTRAGEN"
    },
    pl: {
      "← Página inicial":"← Strona główna","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"OGÓLNE WARUNKI UDZIELANIA FINANSOWANIA",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Złożenie wniosku o finansowanie podlega analizie i zatwierdzeniu wniosku oraz weryfikacji obowiązujących warunków.",
      "1. Condições de elegibilidade":"1. Warunki kwalifikacji","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Wnioskodawca musi posiadać aktywne osobiste konto bankowe na własne nazwisko.",
      "É necessário apresentar um documento de identificação válido.":"Należy przedstawić ważny dokument tożsamości.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"Zdolność do spłaty zostanie oceniona przed podjęciem decyzji.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Rzeczywista roczna stopa oprocentowania (RRSO)","A TAEG indicada para esta simulação é de":"RRSO wskazana w tej symulacji wynosi",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"RRSO oznacza całkowity roczny koszt kredytu, w tym obowiązkowe opłaty. Ostateczna wartość i wszystkie warunki zostaną przedstawione przed zawarciem umowy.",
      "3. Montantes e prazos disponíveis":"3. Dostępne kwoty i okresy","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Kwota finansowania: od 5 000 € do 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Okres spłaty: od 12 do 300 miesięcy.",
      "4. Simulação de reembolso":"4. Symulacja spłaty","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"Symulacja przedstawia szacunkową miesięczną ratę, odsetki, całkowitą kwotę do spłaty i okres finansowania. Wyniki mają wyłącznie charakter orientacyjny, zależą od wprowadzonych danych i nie stanowią zatwierdzenia kredytu ani oferty umowy.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Analiza, zatwierdzenie i udostępnienie środków","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Każde finansowanie zależy od indywidualnej analizy wniosku, zatwierdzenia przez właściwy podmiot i dopełnienia formalności umownych. Środki mogą zostać udostępnione dopiero po zawarciu umowy i realizacji operacji przez bank.",
      "6. Transparência e custos":"6. Przejrzystość i koszty","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Warunki, całkowity koszt kredytu oraz wszelkie prowizje lub opłaty muszą zostać przekazane wnioskodawcy przed zawarciem umowy. Wcześniejsza wpłata jakiejkolwiek kwoty nie gwarantuje zatwierdzenia finansowania.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"UTWÓRZ KONTO I ZŁÓŻ WNIOSEK O FINANSOWANIE"
    },
    es: {
      "← Página inicial":"← Página de inicio","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"CONDICIONES GENERALES DE CONCESIÓN DE FINANCIACIÓN",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"La presentación de una solicitud de financiación está sujeta al análisis y aprobación de la solicitud, así como a la verificación de las condiciones aplicables.",
      "1. Condições de elegibilidade":"1. Condiciones de elegibilidad","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"El solicitante debe ser titular de una cuenta bancaria personal, activa y a su nombre.",
      "É necessário apresentar um documento de identificação válido.":"Es necesario presentar un documento de identidad válido.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"La capacidad de reembolso se evaluará antes de cualquier decisión.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Tasa Anual Equivalente (TAE)","A TAEG indicada para esta simulação é de":"La TAE indicada para esta simulación es del",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"La TAE representa el coste anual total del crédito, incluidos los gastos obligatorios aplicables. El valor definitivo y todas las condiciones se comunicarán antes de formalizar cualquier contrato.",
      "3. Montantes e prazos disponíveis":"3. Importes y plazos disponibles","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Importe de financiación: de 5 000 € a 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Plazo de devolución: de 12 a 300 meses.",
      "4. Simulação de reembolso":"4. Simulación de reembolso","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"La simulación presenta una estimación de la cuota mensual, los intereses, el importe total a reembolsar y la duración de la financiación. Los resultados son meramente orientativos, dependen de los datos introducidos y no constituyen una aprobación de crédito ni una oferta contractual.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Análisis, aprobación y disponibilidad de los fondos","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Cualquier financiación depende del análisis individual de la solicitud, de la aprobación por la entidad competente y de la finalización de los trámites contractuales. Los fondos solo podrán ponerse a disposición tras formalizar el contrato y ejecutar la operación la entidad bancaria.",
      "6. Transparência e custos":"6. Transparencia y costes","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Las condiciones, el coste total del crédito y cualquier comisión o gasto aplicable deben comunicarse al solicitante antes de formalizar el contrato. El pago anticipado de cualquier cantidad no garantiza la aprobación de la financiación.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"CREAR MI CUENTA Y SOLICITAR FINANCIACIÓN"
    },
    it: {
      "← Página inicial":"← Pagina iniziale","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"CONDIZIONI GENERALI PER LA CONCESSIONE DI FINANZIAMENTI",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"La presentazione di una richiesta di finanziamento è soggetta all’analisi e all’approvazione della domanda, nonché alla verifica delle condizioni applicabili.",
      "1. Condições de elegibilidade":"1. Requisiti di idoneità","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Il richiedente deve essere titolare di un conto bancario personale, attivo e intestato a proprio nome.",
      "É necessário apresentar um documento de identificação válido.":"È necessario presentare un documento d’identità valido.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"La capacità di rimborso sarà valutata prima di qualsiasi decisione.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Tasso annuo effettivo globale (TAEG)","A TAEG indicada para esta simulação é de":"Il TAEG indicato per questa simulazione è del",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"Il TAEG rappresenta il costo totale annuo del credito, compresi gli oneri obbligatori applicabili. Il valore definitivo e tutte le condizioni saranno comunicati prima della stipula di qualsiasi contratto.",
      "3. Montantes e prazos disponíveis":"3. Importi e durate disponibili","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Importo del finanziamento: da 5 000 € a 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Durata del rimborso: da 12 a 300 mesi.",
      "4. Simulação de reembolso":"4. Simulazione del rimborso","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"La simulazione presenta una stima della rata mensile, degli interessi, dell’importo totale da rimborsare e della durata del finanziamento. I risultati sono puramente indicativi, dipendono dai dati inseriti e non costituiscono un’approvazione del credito né un’offerta contrattuale.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Analisi, approvazione ed erogazione dei fondi","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Qualsiasi finanziamento è subordinato all’analisi individuale della domanda, all’approvazione dell’ente competente e al completamento delle formalità contrattuali. I fondi potranno essere messi a disposizione solo dopo la stipula del contratto e l’esecuzione dell’operazione da parte dell’istituto bancario.",
      "6. Transparência e custos":"6. Trasparenza e costi","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Le condizioni, il costo totale del credito e qualsiasi commissione o onere applicabile devono essere comunicati al richiedente prima della stipula del contratto. Il pagamento anticipato di qualsiasi somma non garantisce l’approvazione del finanziamento.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"CREA IL MIO ACCOUNT E RICHIEDI UN FINANZIAMENTO"
    },
    el: {
      "← Página inicial":"← Αρχική σελίδα","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"ΓΕΝΙΚΟΙ ΟΡΟΙ ΧΟΡΗΓΗΣΗΣ ΧΡΗΜΑΤΟΔΟΤΗΣΗΣ",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Η υποβολή αίτησης χρηματοδότησης υπόκειται σε εξέταση και έγκριση της αίτησης, καθώς και σε επαλήθευση των ισχυόντων όρων.",
      "1. Condições de elegibilidade":"1. Προϋποθέσεις επιλεξιμότητας","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Ο αιτών πρέπει να είναι κάτοχος ενεργού προσωπικού τραπεζικού λογαριασμού στο όνομά του.",
      "É necessário apresentar um documento de identificação válido.":"Απαιτείται έγκυρο έγγραφο ταυτοποίησης.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"Η δυνατότητα αποπληρωμής θα αξιολογηθεί πριν από οποιαδήποτε απόφαση.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Συνολικό ετήσιο πραγματικό επιτόκιο (ΣΕΠΕ)","A TAEG indicada para esta simulação é de":"Το ΣΕΠΕ που αναφέρεται για αυτή την προσομοίωση είναι",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"Το ΣΕΠΕ αντιπροσωπεύει το συνολικό ετήσιο κόστος της πίστωσης, συμπεριλαμβανομένων των υποχρεωτικών επιβαρύνσεων. Η οριστική τιμή και όλοι οι όροι θα γνωστοποιηθούν πριν από τη σύναψη σύμβασης.",
      "3. Montantes e prazos disponíveis":"3. Διαθέσιμα ποσά και διάρκεια","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Ποσό χρηματοδότησης: από 5.000 € έως 1.000.000 €.","Prazo de reembolso: de 12 a 300 meses.":"Διάρκεια αποπληρωμής: από 12 έως 300 μήνες.",
      "4. Simulação de reembolso":"4. Προσομοίωση αποπληρωμής","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"Η προσομοίωση παρουσιάζει εκτίμηση της μηνιαίας δόσης, των τόκων, του συνολικού ποσού αποπληρωμής και της διάρκειας χρηματοδότησης. Τα αποτελέσματα είναι ενδεικτικά, εξαρτώνται από τα στοιχεία που καταχωρίστηκαν και δεν αποτελούν έγκριση πίστωσης ή συμβατική προσφορά.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Αξιολόγηση, έγκριση και διάθεση κεφαλαίων","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Κάθε χρηματοδότηση εξαρτάται από την ατομική αξιολόγηση της αίτησης, την έγκριση από τον αρμόδιο φορέα και την ολοκλήρωση των συμβατικών διατυπώσεων. Τα κεφάλαια μπορούν να διατεθούν μόνο μετά την υπογραφή της σύμβασης και την εκτέλεση της συναλλαγής από το τραπεζικό ίδρυμα.",
      "6. Transparência e custos":"6. Διαφάνεια και έξοδα","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Οι όροι, το συνολικό κόστος της πίστωσης και τυχόν προμήθειες ή επιβαρύνσεις πρέπει να γνωστοποιούνται στον αιτούντα πριν από τη σύναψη της σύμβασης. Η προκαταβολή οποιουδήποτε ποσού δεν εγγυάται την έγκριση της χρηματοδότησης.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"ΔΗΜΙΟΥΡΓΗΣΤΕ ΛΟΓΑΡΙΑΣΜΟ ΚΑΙ ΖΗΤΗΣΤΕ ΧΡΗΜΑΤΟΔΟΤΗΣΗ"
    },
    sk: {
      "← Página inicial":"← Domovská stránka","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"VŠEOBECNÉ PODMIENKY POSKYTOVANIA FINANCOVANIA",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Podanie žiadosti o financovanie podlieha posúdeniu a schváleniu žiadosti, ako aj overeniu príslušných podmienok.",
      "1. Condições de elegibilidade":"1. Podmienky oprávnenosti","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Žiadateľ musí byť majiteľom aktívneho osobného bankového účtu vedeného na svoje meno.",
      "É necessário apresentar um documento de identificação válido.":"Je potrebné predložiť platný doklad totožnosti.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"Schopnosť splácania sa posúdi pred prijatím akéhokoľvek rozhodnutia.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Ročná percentuálna miera nákladov (RPMN)","A TAEG indicada para esta simulação é de":"RPMN uvedená v tejto simulácii je",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"RPMN predstavuje celkové ročné náklady úveru vrátane príslušných povinných poplatkov. Konečná hodnota a všetky podmienky budú oznámené pred uzavretím zmluvy.",
      "3. Montantes e prazos disponíveis":"3. Dostupné sumy a lehoty","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Výška financovania: od 5 000 € do 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Doba splácania: od 12 do 300 mesiacov.",
      "4. Simulação de reembolso":"4. Simulácia splácania","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"Simulácia uvádza odhad mesačnej splátky, úrokov, celkovej sumy na splatenie a dĺžky financovania. Výsledky sú iba orientačné, závisia od zadaných údajov a nepredstavujú schválenie úveru ani zmluvnú ponuku.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Posúdenie, schválenie a sprístupnenie finančných prostriedkov","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Každé financovanie závisí od individuálneho posúdenia žiadosti, schválenia príslušným subjektom a dokončenia zmluvných formalít. Finančné prostriedky možno sprístupniť až po uzavretí zmluvy a vykonaní operácie bankovou inštitúciou.",
      "6. Transparência e custos":"6. Transparentnosť a náklady","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Podmienky, celkové náklady úveru a všetky príslušné provízie alebo poplatky musia byť žiadateľovi oznámené pred uzavretím zmluvy. Platba akejkoľvek sumy vopred nezaručuje schválenie financovania.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"VYTVORIŤ ÚČET A POŽIADAŤ O FINANCOVANIE"
    },
    hr: {
      "← Página inicial":"← Početna stranica","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"OPĆI UVJETI ODOBRAVANJA FINANCIRANJA",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Podnošenje zahtjeva za financiranje podliježe analizi i odobrenju zahtjeva te provjeri primjenjivih uvjeta.",
      "1. Condições de elegibilidade":"1. Uvjeti prihvatljivosti","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Podnositelj zahtjeva mora biti vlasnik aktivnog osobnog bankovnog računa na svoje ime.",
      "É necessário apresentar um documento de identificação válido.":"Potrebno je predočiti važeći identifikacijski dokument.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"Sposobnost otplate procijenit će se prije donošenja bilo kakve odluke.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Efektivna godišnja kamatna stopa (EKS)","A TAEG indicada para esta simulação é de":"EKS navedena za ovu simulaciju iznosi",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"EKS predstavlja ukupni godišnji trošak kredita, uključujući primjenjive obvezne naknade. Konačna vrijednost i svi uvjeti bit će priopćeni prije sklapanja ugovora.",
      "3. Montantes e prazos disponíveis":"3. Dostupni iznosi i rokovi","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Iznos financiranja: od 5 000 € do 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Rok otplate: od 12 do 300 mjeseci.",
      "4. Simulação de reembolso":"4. Simulacija otplate","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"Simulacija prikazuje procjenu mjesečne rate, kamata, ukupnog iznosa za otplatu i trajanja financiranja. Rezultati su samo informativni, ovise o unesenim podacima i ne predstavljaju odobrenje kredita niti ugovornu ponudu.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Analiza, odobrenje i isplata sredstava","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Svako financiranje ovisi o pojedinačnoj analizi zahtjeva, odobrenju nadležnog tijela i dovršetku ugovornih formalnosti. Sredstva se mogu staviti na raspolaganje tek nakon sklapanja ugovora i provedbe transakcije od strane bankovne institucije.",
      "6. Transparência e custos":"6. Transparentnost i troškovi","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Uvjeti, ukupni trošak kredita i sve primjenjive provizije ili naknade moraju se priopćiti podnositelju zahtjeva prije sklapanja ugovora. Plaćanje bilo kojeg iznosa unaprijed ne jamči odobrenje financiranja.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"IZRADITE RAČUN I ZATRAŽITE FINANCIRANJE"
    },
    fr: {
      "← Página inicial":"← Page d’accueil","CONDIÇÕES GERAIS DE CONCESSÃO DE FINANCIAMENTO":"CONDITIONS GÉNÉRALES D’OCTROI DE FINANCEMENT",
      "A apresentação de um pedido de financiamento está sujeita à análise e aprovação da candidatura, bem como à verificação das condições aplicáveis.":"Toute demande de financement est soumise à l’examen et à l’approbation du dossier, ainsi qu’à la vérification des conditions applicables.",
      "1. Condições de elegibilidade":"1. Conditions d’éligibilité","O requerente deve ser titular de uma conta bancária pessoal, ativa e em seu nome.":"Le demandeur doit être titulaire d’un compte bancaire personnel, actif et ouvert à son nom.",
      "É necessário apresentar um documento de identificação válido.":"Un document d’identité valide doit être présenté.","A capacidade de reembolso será avaliada antes de qualquer decisão.":"La capacité de remboursement sera évaluée avant toute décision.",
      "2. Taxa Anual de Encargos Efetiva Global (TAEG)":"2. Taux annuel effectif global (TAEG)","A TAEG indicada para esta simulação é de":"Le TAEG indiqué pour cette simulation est de",
      "A TAEG representa o custo total anual do crédito, incluindo os encargos obrigatórios aplicáveis. O valor definitivo e todas as condições serão apresentados antes da celebração de qualquer contrato.":"Le TAEG représente le coût annuel total du crédit, y compris les frais obligatoires applicables. Le taux définitif et l’ensemble des conditions seront communiqués avant la conclusion de tout contrat.",
      "3. Montantes e prazos disponíveis":"3. Montants et durées disponibles","Montante de financiamento: de 5 000 € a 1 000 000 €.":"Montant du financement : de 5 000 € à 1 000 000 €.","Prazo de reembolso: de 12 a 300 meses.":"Durée de remboursement : de 12 à 300 mois.",
      "4. Simulação de reembolso":"4. Simulation de remboursement","A simulação apresenta uma estimativa da prestação mensal, dos juros, do montante total a reembolsar e da duração do financiamento. Os resultados são meramente indicativos, dependem dos dados introduzidos e não constituem uma aprovação de crédito nem uma proposta contratual.":"La simulation présente une estimation de la mensualité, des intérêts, du montant total à rembourser et de la durée du financement. Les résultats sont fournis à titre indicatif, dépendent des données saisies et ne constituent ni une approbation de crédit ni une offre contractuelle.",
      "5. Análise, aprovação e disponibilização dos fundos":"5. Examen, approbation et mise à disposition des fonds","Qualquer financiamento depende da análise individual da candidatura, da aprovação pela entidade competente e da conclusão das formalidades contratuais. Os fundos só poderão ser disponibilizados após a formalização do contrato e a execução da operação pela instituição bancária.":"Tout financement dépend de l’examen individuel du dossier, de l’approbation par l’organisme compétent et de l’accomplissement des formalités contractuelles. Les fonds ne pourront être mis à disposition qu’après la conclusion du contrat et l’exécution de l’opération par l’établissement bancaire.",
      "6. Transparência e custos":"6. Transparence et frais","As condições, o custo total do crédito e quaisquer comissões ou encargos aplicáveis devem ser comunicados ao requerente antes da celebração do contrato. O pagamento antecipado de qualquer quantia não garante a aprovação do financiamento.":"Les conditions, le coût total du crédit ainsi que les éventuelles commissions ou frais applicables doivent être communiqués au demandeur avant la conclusion du contrat. Le paiement anticipé d’une somme quelconque ne garantit pas l’approbation du financement.",
      "CRIAR A MINHA CONTA E SOLICITAR FINANCIAMENTO":"CRÉER MON COMPTE ET DEMANDER UN FINANCEMENT"
    }
  };
  Object.entries(financePageTranslations).forEach(([lang, entries]) => Object.assign(translations[lang], entries));

  const key = "intereuropa_language";
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  const getLang = () => {
    // Um idioma indicado explicitamente no URL tem prioridade para permitir
    // testes e ligações partilhadas, mesmo que exista uma preferência guardada.
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang && languages[urlLang]) return urlLang;
    let savedLang = "";
    try { savedLang = localStorage.getItem(key) || ""; } catch (e) {}
    if (!savedLang) {
      const match = document.cookie.match(/(?:^|; )intereuropa_language=([^;]+)/);
      if (match) savedLang = decodeURIComponent(match[1]);
    }
    return (savedLang && languages[savedLang]) ? savedLang : "pt";
  };
  let activeLang = "pt";
  function translateText(value, dict) {
    const trimmed = value.trim();
    if (!trimmed) return value;
    const normalized = trimmed.replace(/\s+/g, " ");
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
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
    activeLang = lang;
    try { localStorage.setItem(key, lang); } catch (e) {}
    try { document.cookie = "intereuropa_language=" + encodeURIComponent(lang) + "; path=/; max-age=31536000; SameSite=Lax"; } catch (e) {}
    document.documentElement.lang = languages[lang][1];
    const dict = translations[lang] || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement && !node.parentElement.closest("script,style")) nodes.push(node);
    }
    nodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      node.nodeValue = translateText(originalTextNodes.get(node), dict);
    });

    // Tradução direta do texto do aviso, independentemente do processamento geral dos nós.
    const fundingNoticeSource = "Qualquer decisão depende de uma análise individual e das condições comunicadas antes de qualquer contrato. Em caso de aprovação, o financiamento poderá ser disponibilizado o mais rapidamente possível.";
    const fundingNotice = document.querySelector(".pedido-aviso");
    if (fundingNotice && dict[fundingNoticeSource]) {
      const noticeTextNode = Array.from(fundingNotice.childNodes).find(node => node.nodeType === Node.TEXT_NODE && (originalTextNodes.get(node) || node.nodeValue).includes(fundingNoticeSource));
      if (noticeTextNode) {
        const original = originalTextNodes.get(noticeTextNode) || noticeTextNode.nodeValue;
        const leading = (original.match(/^\s*/) || [""])[0];
        const trailing = (original.match(/\s*$/) || [""])[0];
        noticeTextNode.nodeValue = leading + dict[fundingNoticeSource] + trailing;
      }
    }
    // Garantir a tradução do título da lista de pedidos na área do cliente.
    const requestsHeading = document.querySelector("#normalDashboard > h2");
    if (requestsHeading) {
      const headingText = "Os meus pedidos de financiamento";
      const translatedHeading = dict[headingText] || headingText;
      // Evita recriar o nó em cada passagem: isso disparava o MutationObserver
      // continuamente e fazia a página piscar/parecer um vídeo.
      if (requestsHeading.textContent !== translatedHeading) {
        requestsHeading.textContent = translatedHeading;
      }
    }
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
    if (!header) return;
    let select = document.getElementById("intereuropa-language");
    if (!select) {
      const wrap = document.createElement("label");
      wrap.className = "intereuropa-language-wrap";
      wrap.setAttribute("aria-label", "Language / Idioma");
      select = document.createElement("select");
      select.id = "intereuropa-language";
      select.setAttribute("aria-label", "Selecionar idioma");
      Object.entries(languages).forEach(([code, info]) => {
        const option = document.createElement("option");
        option.value = code; option.textContent = info[0]; select.appendChild(option);
      });
      const globe = document.createElement("img");
      globe.src = "assets/intereuropa-language-globe.svg";
      globe.alt = "Globe des neuf langues disponíveis";
      globe.width = 42;
      globe.height = 42;
      globe.loading = "eager";
      wrap.appendChild(globe);
      wrap.appendChild(select);
      header.appendChild(wrap);
    }
    if (!select.dataset.languageHandler) {
      select.addEventListener("change", () => applyLanguage(select.value));
      select.dataset.languageHandler = "true";
    }
    if (!document.getElementById("intereuropa-language-style")) {
      const style = document.createElement("style");
      style.id = "intereuropa-language-style";
      style.textContent = `.intereuropa-language-wrap{display:inline-flex!important;align-items:center!important;gap:11px!important;margin:10px 12px!important;padding:12px 17px!important;border:2px solid #d7e8ff!important;border-radius:16px!important;background-color:#08264b!important;background-image:linear-gradient(120deg,rgba(4,24,52,.18),rgba(15,73,132,.12)),url("${window.location.pathname.startsWith("/BancoWBD/") ? "/BancoWBD" : ""}/assets/intereuropa-language-wallpaper.svg")!important;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;box-shadow:0 7px 22px rgba(4,20,43,.42),0 0 0 3px rgba(48,111,177,.16),inset 0 1px 0 rgba(255,255,255,.55)!important;position:relative!important}.intereuropa-language-wrap img{display:block!important;width:44px!important;height:44px!important;object-fit:contain!important;border-radius:50%!important;flex:0 0 44px!important;filter:drop-shadow(0 2px 4px rgba(0,0,0,.55))!important}.intereuropa-language-wrap select{padding:9px 12px!important;border:1px solid rgba(235,245,255,.78)!important;border-radius:9px!important;background:rgba(3,20,43,.78)!important;color:#fff!important;font:inherit!important;font-weight:700!important;max-width:150px!important;min-width:118px!important;outline-offset:3px!important;color-scheme:dark!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}.intereuropa-language-wrap select option{background:#102b4e!important;color:#fff!important}@media(max-width:750px){.intereuropa-language-wrap{margin:7px 0;padding:8px 10px;gap:8px}.intereuropa-language-wrap img{width:38px;height:38px;flex-basis:38px}.intereuropa-language-wrap select{max-width:140px;min-width:110px;padding:8px 9px}}`;
      document.head.appendChild(style);
    }
  }
  function start() {
    installSelector();
    applyLanguage(getLang());
    const observer = new MutationObserver(() => {
      clearTimeout(window.__intereuropaI18nTimer);
      window.__intereuropaI18nTimer = setTimeout(() => applyLanguage(activeLang), 120);
    });
    // Only observe added/removed elements. Observing characterData caused
    // the translator to observe its own text changes and repeatedly restart.
    observer.observe(document.body, {childList:true,subtree:true});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();