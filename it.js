const messages = {

    // Login
    'Email': 'E-mail',
    'Login': 'Connettersi',
    'Password': 'Password',
    'Provided by your administrator': 'Fornito dal tuo amministratore',
    'Remember me': 'Ricordarsi di me',
    'no-identification-info': ' Se hai dimenticato la email o la password, per favore, contatta l\'amministratore',
    'bad-credentials': 'Le Sue credenziali non sono corretti. Riprova per favore.',
    'not-enough-rights': 'Non ha i diritti sufficienti per accedere.',
    'user-not-found': 'L\'utente non è stato trovato.',

    // Generale
    'more-info': 'Maggiori informazioni',
    'from': 'Dal',
    'to': 'Al',
    'real-time': 'in tempo reale',
    'update': 'Modificare',
    'delete': 'Eliminare',
    'previous': 'Precedente',
    'next': 'Seguente',
    'send': 'Mandare',
    'export-all': 'Esportare tutto',
    'yes': 'Sì',
    'no': 'No',
    'open': 'Aperto',
    'fullname': 'Nome completo',
    'job-position': 'Posto',
    'assistance': 'Ha bisogno di aiuto? Contatta jessie@whasq.com (dal lunedì al venerdì dalle 9:00 alle 12:00 e dalle 14:00 alle 18:00)',
    'download-attachment': 'Scaricare l\'allegato',
  
    // Menù
    'activity': 'Attività',
    'actives-users': 'Utenti attivi',
    'registered-users': 'Utenti registrati',
    'whasqs-answers': 'Whasqs e Risposte',
    'skills': 'Talenti',
    'time-savings': 'Risparmio di tempo',
    'whasqers': 'Whasqers',
    'podium': 'Podio',
    'search': 'Ricerca',
    'manage': 'Gestire',
    'skills-categories': 'Talenti e Categorie',
    'whasqs': 'Whasqs',
    'whasqs-reports': 'Whasqs segnalati',
    'answers-reports': 'Risposte segnalate',
    'users': 'Utenti',
    'admin': 'Amministrazione',
    'targets': 'Obiettivi e Gamificazione',
    'notifications': 'Notifiche',
  
    // Attività
    'eve-computed-kpi': 'indicatore calcolato a G-1',
    'no-data-for-selected-period': 'Nessun dato disponibile per il periodo selezionato',
    'no-data-available': 'Non ci sono dati disponibili',

    // ActivityActiveUsers
    'actives-title': 'Utenti attivi',
    'actives-kpi-title': 'Attivi',
    'actives-kpi-help-title': 'Attivi',
    'actives-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono connessi almeno una volta al mese "{month}".',
    'actives-dda-kpi-title': 'Attivi DIA (dall\'inizio dell\'attività)',
    'actives-dda-kpi-help-title': 'Attivi DIA',
    'actives-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono connessi dall\'inizio dell\'attività.',
    'actives-target-kpi-title': 'Attivi - Obiettivi',
    'actives-target-kpi-help-title': 'Attivi - Obiettivi',
    'actives-target-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di utenti che si sono connessi almeno una volta al mese "{month}" rispetto all\'obiettivo definito.',
    'actives-evolution-title': 'Evoluzione degli utenti attivi',
    'actives-evolution-help-title': 'Evoluzione degli utenti attivi',
    'actives-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi.',
    'actives-dda-evolution-title': 'Evoluzione degli utenti attivi DIA',
    'actives-dda-evolution-help-title': 'Evoluzione degli utenti attivi DIA',
    'actives-dda-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi accumulati dalla creazione del store.',
    'actives-notregistered-evolution-title': 'Evoluzione degli utenti attivi - registrazione',
    'actives-notregistered-evolution-help-title': 'Evoluzione degli utenti attivi - registrazione',
    'actives-notregistered-evolution-help-message': 'Questo indicatore rappresenta il numero di utenti attivi sottraendo gli utenti registrati.',
  
    // ActivityRegisteredUsers
    'registered-title': 'Utenti registrati - {month}',
    'registered-kpi-title': 'Registrati',
    'registered-kpi-help-title': 'Registrati',
    'registered-kpi-help-message': 'Questo indicatore rappresenta il numero di utenti che si sono registrati nel mese"{month}".',
    'registered-inactives-kpi-title': 'Percentuale di utenti non attivi',
    'registered-inactives-kpi-help-title': 'Percentuale di utenti non attivi',
    'registered-inactives-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di utenti che si sono connessi nel mese "{month}" senza essere connessi rispetto al numero di utenti totale registrati nel mese.',
    'registered-inactives-evolution-title': 'Evoluzione delle registrazione',
    'registered-inactives-evolution-help-title': 'Evoluzione delle registrazione',
    'registered-inactives-evolution-help-message': 'Questo indicatore rappresesnta il numero di utenti registrati.',
  
    // ActivityWhasqs
    'whasqs-answers-title': 'Whasqs e Risposte - {month}',
    'whasqs-answers-kpi-title': 'Numero di Whasqs e risposte',
    'whasqs-answers-kpi-help-title': 'Numero di Whasqs e risposte',
    'whasqs-answers-kpi-help-message': 'Questo indicatore rappresenta il numero di whasqs pubblicati aggiunti al numero di risposte pubblicate nel mese "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Numero di Whasqs / autore di whasqs',
    'whasqs-by-whasqer-kpi-help-title': 'Numero di Whasqs / autore di whasqs',
    'whasqs-by-whasqer-kpi-help-message': 'Questo indicatore rappresenta il numero di whasqs pubblicate nel mese "{month}" per autore di whasqs.',
    'answers-kpi-title': 'Numero di risposte',
    'answers-kpi-help-title': 'Numero di risposte',
    'answers-kpi-help-message': 'Questo indicatore rappresenta il numero di risposte pubblicate nel mese "{month}".',
    'answers-by-creator-kpi-title': 'Numero di risposte / autore di risposte',
    'answers-by-creator-kpi-help-title': 'Numero di risposte / autore di risposte',
    'answers-by-creator-kpi-help-message': 'Questo indicatore rappresenta il numero di risposte pubblicate nel mese "{month}" per autore di risposte.',
    'whasqs-with-contribution-kpi-title': 'Percentuale di Whasqs con interazione',
    'whasqs-with-contribution-kpi-help-title': 'Percentuale di Whasqs con interazione',
    'whasqs-with-contribution-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che hanno ricevuto risposte nel mese "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Percentuale di Whasqs con interazione DIA',
    'whasqs-with-contribution-dda-kpi-help-title': 'Percentuale di Whasqs con interazione DIA',
    'whasqs-with-contribution-dda-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che hanno ricevuto risposte.',
    'whasqs-resolved-part-kpi-title': 'Percentuale di Whasqs risolti',
    'whasqs-resolved-part-kpi-help-title': 'Percentuale di Whasqs risolti',
    'whasqs-resolved-part-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs che sono stato risolti nel mese"{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Percentuale di Whasqs risolti DIA',
    'whasqs-resolved-part-dda-kpi-help-title': 'Percentuale di Whasqs risolti DIA',
    'whasqs-resolved-part-dda-kpi-help-message': 'Questo indicatore rappresenta la percentuale del numero di whasqs que sono stato risolti.',
    'whasqs-evolution-title': 'Evoluzione del numero di whasqs',
    'whasqs-evolution-help-title': 'Evoluzione del numero di whasqs',
    'whasqs-evolution-help-message': 'Questo indicatore rappresenta il numero totale di whasqs.',
    'answers-evolution-title': 'Evoluzione del numero delle risposte',
    'answers-evolution-help-title': 'Evoluzione del numero delle risposte',
    'answers-evolution-help-message': 'Questo indicatore rappresenta il numero totale di risposte.',
  
    // ActivitySkills
    'skills-title': 'Talenti',
    'skills-dda-kpi-title': 'Numero totale di talenti identificati DIA',
    'skills-dda-kpi-help-title': 'Numero totale di talenti identificati DIA',
    'skills-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di talenti che sono stato identificati per i whasqers fin dall’inizio dell’attività.',
    'skills-part-kpi-title': 'Percentuale di talenti unici identificati',
    'skills-part-kpi-help-title': 'Percentuale di talenti unici identificati',
    'skills-part-kpi-help-message': 'Questo indicatore rappresenta la relazione tra il numero di talenti unici que sono stato identifici per i whasqers fin dall’inizio dell’attività rispetto a numero di talenti esistenti.',
    'skills-evolution-title': 'Evoluzione del numero di talenti identificati nei whasqs',
    'skills-evolution-help-title': 'Evoluzione del numero di talenti identificati nei whasqs',
    'skills-evolution-help-message': 'Questo indicatore rappresenta il numero di talenti identificati nei whasqs.',
    'most-used-cats-whasqs-kpi-title': 'Le 5 categorie le più utilizzate nei whasqs',
    'most-used-cats-whasqs-kpi-help-title': 'Le 5 categorie les più utilizzate nei whasqs',
    'most-used-cats-whasqs-kpi-help-message-1': 'In questa tabella troverai le 5 categorie che contengono il maggior numero di talenti utilizzati nei whasq.',
    'most-used-cats-whasqs-kpi-help-message-2': 'I punti colorati rappresentano il numero di talenti usati negli whasqs per la categoria corrispondente.',
    'most-used-skills-whasqs-kpi-title': 'I 5 talenti les più utilizzati nei whasqs',
    'most-used-skills-whasqs-kpi-help-title': 'I 5 talenti les più utilizzati nei whasqs',
    'most-used-skills-whasqs-kpi-help-message-1': 'In questa tabella troverai le 5 talenti le più utilizzati nei whasqs.',
    'most-used-skills-whasqs-kpi-help-message-2': 'I punti colorati rappresentano il numero di uso di ogni talento nei whasqs.',
    'most-used-whasqers-kpi-title': 'I 5 talenti le più utilizzati per i whasqers',
    'most-used-whasqers-kpi-help-title': 'I 5 talenti le più utilizzati per i whasqers',
    'most-used-whasqers-kpi-help-message-1': 'In questa tabella troverai i 5 talenti le più identificati per i whasqers.',
    'most-used-whasqers-kpi-help-message-2': 'I punti colorati rappresentano il numero di identificazione di ogni talento per i whasqers.',
    'less-used-whasqers-kpi-title': 'I 5 talenti meno utilizzati per i whasqers',
    'less-used-whasqers-kpi-help-title': 'Le 5 talenti meno utilizzati per i whasqers',
    'less-used-whasqers-kpi-help-message-1': 'In questa tabella troverai i 5 talenti meno identificati nei whasqs.',
    'less-used-whasqers-kpi-help-message-2': 'I punti colorati rappresenta rappresentano il numero di identificazione di ogni talento per i whasqers.',
  
    // TimeSavings
    'time-savings-title': 'Risparmio di tempo - {month}',
    'minutes-earned-kpi-title': 'Minuti guadagnati del mese',
    'minutes-earned-kpi-help-title': 'Minuti guadagnati del mese',
    'minutes-earned-kpi-help-message': 'Questo indicatore rappresenta il numero di minuti guadagnati nel mese "{month}".',
    'minutes-earned-dda-kpi-title': 'Minuti guadagnati DIA',
    'minutes-earned-dda-kpi-help-title': 'Minuti guadagnati DIA',
    'minutes-earned-dda-kpi-help-message': 'Questo indicatore rappresenta il numero di minuti guadagnati fin dall’inizio dell’attività.',
    'minutes-earned-month-kpi-title': 'Minuti guadagnati del mese',
    'minutes-earned-dda-kpi-title': 'Minuti guadagnati DIA',
  
    // Podium
    'podium-title': 'Podio',
    'whasqers-of-month': 'Whasqers del mese di',
    'no-podium-for-selected-month': 'Nessun podio è disponibile per il mese selezionato',
  
    // Card-user
    'answers-label': 'RISPOSTE',
    'solutions-label': 'SOLUZIONI',
    'see-profile': 'Vedere il profilo',
  
    // Search
    'search-title': 'Ricerca',
    'search-by-name-placeholder': 'Ricerca per nome...',
    'no-result-select-criteria': 'Nessun risultato. Si prega di inserire almeno un criterio.',
  
    // CategoriesSearchBlock
    'dynamic-search-title': 'Ricerca dinamica',
  
    // SkillsCategories
    'skills-categories-title': 'Talenti e Categorie',
    'update-cat-for-lang': 'Modifica della categoria per la lingua {lang}',
    'update-skill-for-cat-and-lang-fr': 'Modifica del talento per la categoria "{cat}" e la lingua IT',
    'add-cat-for-lang-fr': 'Aggiunta della categoria per la lingua IT',
    'add-skill-for-cat-and-lang-fr': 'Aggiunta del talento per la categoria {cat}" e la lingua IT',
    'delete-cat-confirm-message': 'Sei sicuro di voler eliminare questa categoria?',
    'delete-skill-confirm-message': 'Sei sicuro di voler eliminare questo talento?',
    'choose-lang': 'Scegliere la lingua',
    'add-lang': 'Aggiungere una lingua',
    'add-cat': 'Aggiungere una categoria',
  
    // InfoMessage
    'cat-deleted': 'La categoria "{cat}" è stata eliminata.',
    'error-deleting-cat': 'Si è verificato un errore durante la soppressione della categoria "{cat}".',
    'skill-deleted': 'Il talento "{skill}" è stato eliminato.',
    'error-deleting-skill': 'Si è verificato un errore durante la soppressione del talento "{skill}".',
  
    // SkillCategoriesModal
    'already-existing-cat': 'Categoria/Categorie già esistente',
    'already-existing-skill': 'Talento/Talenti già esistente/esistenti',
    'no-existing-cat': 'Nessun categoria esistente',
    'no-existing-skill': 'Nessun talent esistente',
  
    // CreateLanguageModal
    'add-new-lang': 'Aggiunta di una nuova lingua',
    'already-implemented-langs': 'Lingue già esistente',
  
    // WhasqsList
    'whasqs-title': 'Whasqs',
    'block-whasq-confirm-message': 'Sei sicuro di voler bloccare questo whasq?',
    'unblock-whasq-confirm-message': 'Sei sicuro di voler sbloccare questo whasq?',
    'ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'remove-whasq-confirm-message': 'Sei sicuro di voler eliminare questo whasq?',
    'add-whasq': 'Aggiunta di un Whasq',
    'whasqs-list': 'Lista dei Whasqs',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Creazione',
    'whasqs-column-update': 'Aggiornamento',
    'whasqs-column-title': 'Titolo',
    'whasqs-column-status': 'Status',
    'whasqs-column-urgent': 'Urgente',
    'whasqs-column-answers': 'Risposte',
    'whasqs-column-read': 'Letto',
    'whasqs-column-creator': 'Autore',
    'whasqs-column-skills': 'Talenti',
    'whasqs-column-actions': 'Azione',
    'whasq-resolved-by': 'Risolto per',
    'whasq-resolved-at': 'il',
    'whasqs-action-save-updates': 'Salvare le modifiche',
    'whasqs-action-edit-whasq': 'Modificare il whasq',
    'whasqs-action-unblock-whasq': 'Sbloccare il whasq',
    'whasqs-action-block-whasq': 'Bloccare il whasq',
    'whasqs-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'whasqs-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'whasqs-action-ban-user': 'Bandire quest’ utente',
    'whasqs-action-remove-whasq': 'Soppressione del whasq',

    // WhasqChannelModal
    'whasq-channel-title': 'Titolo del whasq"{whasq-title}"',
    'usefull-answer': 'utile',
    'champion-answer': 'CAMPIONE/CAMPIONESSA',

    // AddWhasqModal
    'add-whasq-title': 'Aggiunta di un nuovo whasq',
    'add-whasq-item-title': 'Titolo',
    'add-whasq-item-message': 'Messaggio',
    'add-whasq-item-exchange': 'Scambio',
    'add-whasq-item-optionnal': 'Facoltativo', 
    'add-whasq-item-channel': 'Canale',
    'add-whasq-item-first-skill': 'Primo talento',
    'add-whasq-item-second-skill': 'Secondo talento',
    'add-whasq-item-third-skill': 'Terzo talent',
    'add-whasq-item-notify-around': 'Notificare intorno a te?',
    'add-whasq-item-urgent': 'Urgente?',
    'add-whasq-item-send-everyone': 'Inviare a tutti?',
    'add-whasq-skill-required': 'È obbligatorio scegliere almeno un talento.',
    'add-whasq-title-required': 'È obbligatorio iserire un titolo.',
    'add-whasq-message-required': 'È obbligatorio inserire un messaggio.',

    // WhasqsReports
    'whasqs-reports-title': 'Whasqs segnalati',
    'whasqs-reports-unblock-whasq-confirm-message': 'Sei sicuro di voler sbloccare questo whasq ?',
    'whasqs-reports-unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'whasqs-reports-ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'whasqs-reports-remove-whasq-confirm-message': 'Sei sicuro di voler eliminare questo whasq?',
    'whasqs-reports-list': 'Lista dei Whasqs segnalati',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Data di creazione',
    'whasqs-reports-column-last-update': 'Ultimo aggiornamento',
    'whasqs-reports-column-title': 'Titolo',
    'whasqs-reports-column-status': 'Status',
    'whasqs-reports-column-urgent': 'Urgente',
    'whasqs-reports-column-answers': 'Risposte',
    'whasqs-reports-column-creator': 'Autore',
    'whasqs-reports-column-reported-by': 'Segnalato da',
    'whasqs-reports-column-actions': 'Azione',
    'whasq-reports-resolved-by': 'Risolto da',
    'whasq-reports-resolved-at': 'il',
    'whasqs-reports-action-save-updates': 'Salvare le modifiche',
    'whasqs-reports-action-edit-whasq': 'Modificare il whasq',
    'whasqs-reports-action-unblock-whasq': 'Sbloccare il whasq',
    'whasqs-reports-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'whasqs-reports-action-unban-user': 'Rimuovere il divieto di accesso de l\'utilisateur',
    'whasqs-reports-action-ban-user': 'Bandire quest’ utente',
    'whasqs-reports-action-remove-whasq': 'Soppressione del whasq whasq',
  
    // AnswersReports
    'answers-reports-title': 'Risposte segnalate',
    'answers-reports-unblock-answer-confirm-message': 'Sei sicuro di voler sbloccare questa risposta?',
    'answers-reports-unban-user-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'answers-reports-ban-user-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'answers-reports-remove-answer-confirm-message': 'Sei sicuro di voler eliminare questa risposta?',
    'answers-reports-list': 'Lista delle risposte segnalate',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Data di creazione',
    'answers-reports-column-last-update': 'Ultimo aggiornamento',
    'answers-reports-column-message': 'Messaggio',
    'answers-reports-column-usefull-count': 'Numero di like',
    'answers-reports-column-champion': 'Campione?',
    'answers-reports-column-creator': 'Autore',
    'answers-reports-column-reported-by': 'Segnalato da',
    'answers-reports-column-actions': 'Azione',
    'answers-reports-action-save-updates': 'Salvare le modifiche',
    'answers-reports-action-edit-answer': 'Modificare la risposta',
    'answers-reports-action-unblock-answer': 'Sbloccare la risposta',
    'answers-reports-action-see-whasq-channel': 'Vedere il flusso della discussione del whasq',
    'answers-reports-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'answers-reports-action-ban-user': 'Bandire quest’ utente',
    'answers-reports-action-remove-answer': 'Soppressione della risposta',
  
    // Users
    'users-title': 'Utenti',
    'users-ban-confirm-message': 'Sei sicuro di voler bandire quest’ utente?',
    'users-unban-confirm-message': 'Sei sicuro di voler rimuovere il divieto di accesso di quest’ utente?',
    'users-archive-confirm-message': 'Sei sicuro di voler archiviare l\'account di questo utente?',
    'users-import-csv': 'Importare CSV',
    'users-list': 'Lista dei Whasqers',
    'users-column-id': 'ID',
    'users-column-register-date': 'Data di registrazione',
    'users-column-last-connection': 'Ultimo accesso',
    'users-column-avatar': 'Avatar',
    'users-column-fullname': 'Nome completo',
    'users-column-title': 'Titolo',
    'users-column-email': 'Email',
    'users-column-actions': 'Azione',
    'users-action-see-profile': 'Vedere il profilo',
    'users-action-unban-user': 'Rimuovere il divieto di accesso di quest’ utente',
    'users-action-ban-user': 'Bandire quest’ utente',
    'users-action-archive-user': 'Archiviare un utente',
    'users-import-starting': 'L\'importazione dei contatti ha cominciato',
    'users-action-consider-user-admin': 'Considerare quest’utente come amministratore',
    'users-action-stop-consider-user-admin': 'Non considerare più quest’ utente come amministratore',
    'users-confirm-consider-admin': 'Sicuro/a di voler considerare quest’ utente come amministratore?',
    'users-confirm-dont-consider-admin': 'Sicuro/a di non volere più considerare quest’ utente come amministratore?',
    'users-action-consider-user-admin-success': 'L\'utente di ID {userId} è ora amministratore.',
    'users-action-stop-consider-user-admin-success': 'L\'utente di ID {userId} non è più amministratore.',

    // ImportUsersModal
    'users-import-title': 'Importazione dei contatti',
    'import-users-file-limit': 'Sono accettati solo file CSV più piccoli di 1 Mo',
    'import-users-error': 'Si è verificato un errore durante l\'importazione, riprova per favore',
    'import-users-btn': 'Importare i contatti',
    'import-users-expected-format': 'Formato richiesto',
    'import-users-fullname': 'Nome completo',
    'import-users-email': 'Email',
    'import-users-job-position': 'Posto',
    'import-users-phone': 'Numero di telefono',

    // Targets
    'targets-title': 'Obiettivi e Gamificazione',
    'targets-update-message': 'L’obiettivo "{target}" è stato aggiornato',
    'targets-geoloc-perimeter-updated': 'Il perimetro di geolocalizzazione è stato aggiornato',
    'targets-points-atribution-updated': 'L’attribuzione di punti  stato aggionato',
    'targets-target': 'Obiettivi',
    'targets-trimester': '3 mesi',
    'targets-bimester': '6 mesi',
    'targets-year': '12 mesi',
    'targets-active-users': 'utenti non attivi',
    'targets-geoloc-perimeter': 'Il perimetro di geolocalizzazione',
    'targets-perimeter': 'Perimetro',
    'targets-gamification': 'Gamificazione',
    'targets-approved-answer': 'Risposta approvata',
    'targets-usefull-answer': 'Risposta utile',
    'targets-recommended-skill': 'Talento consigliato',
    'targets-points': 'punti',
    
    // Header
    'header-profile': 'Profilo',
    'header-logout': 'Disconnettersi',
    'french': 'Francese',
    'english': 'Inglese',
    'spanish': 'Spagnolo',
    'italian': 'Italiano',
    'russian': 'Russo',
  
    // Sidebar
    'sidebar-navigation': 'Navigazione',
  
    // Profile
    'profile': 'Profilo',
    'profile-title': 'Profilo utente',
    'profile-ban-user-confirm-message': 'Sicuro/ di voler bloccare quest’utente?',
    'profile-edit-skill-confirm-message': 'Attenzione, la modifica verrà eseguita in modo globale per tutti gli utenti. Sicuro/a di voler continuare?',
    'profile-remove-skill-confirm-message': 'Sicuro/ di voler eliminare questo talento di quest’utente?',
    'profile-archive-user-confirm-message': 'Sicuro/a di voler archiviare quest’utente?',
    'whasqer-profile': 'Profilo del WhASQer',
    'profile-account-creation': 'Creazione account',
    'profile-last-connection': 'Ultimo accesso',
    'profile-last-update': 'Ultimo aggiornamento',
    'profile-whasqs-column': 'WHASQS',
    'profile-answers-column': 'RISPOSTE',
    'profile-solutions-column': 'SOLUZIONE',
    'profile-block-button': 'Bloccare',
    'profile-archive-button': 'Archiviare',
    'profile-user-archived': 'Quest’utente è stato archiviato',
    'profile-skills-subtitle': 'I suoi talenti',
    'profile-no-listed-skill': 'Nessun talento elencato',
  
    // AddUserSkillModal
    'add-skill-for-user': 'Aggiunta di un talento per {fullname}',
    'already-existing-skills-for-user': 'Talento/Talenti già esistente/esistenti per quest’ utente',
    'available-skills-for-user': 'Talento/Talenti disponibile/disponibili per quest’ utente',
  
    // SuperAdminStores
    'store-selection': 'Scelta del store',
    'store-choice-validation': 'Confermare la scelta del store',
  
    // StoreLogoUpload
    'choose-company-logo': 'Scegliere il logo della tua società',
    'drop-file-here-or-click': 'Rilascia il tuo file qui o fai clic per selezionare il file da importare',
    'company-logo-size-limit': 'Sono accettati solo file di immagine più piccoli di 1mb',
    'company-logo-square-required': 'L\'immagine deve avere un formato quadrato.',
    'error-importing-company-logo': 'Si è verificato un errore durante l’importazione. Per favore, riprova.',
    'import-company-logo': 'Importare il logo',

    // Notifications
    'notifications-title': 'Notifiche',
    'notifications-list': 'L\'elenco delle notifiche',
    'notifications-column-id': 'ID',
    'notifications-column-type': 'Tipo',
    'notifications-column-data': 'Dati',
    'notifications-column-owner': 'Proprietario',
    'notifications-column-shared': 'Condiviso?',
    'notifications-column-creation': 'Data di creazione',
    'notifications-column-message': 'Messaggio',
    'notifications-no-data': 'Non ha alcuna notifica',
}

export default messages
