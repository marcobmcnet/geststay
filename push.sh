#!/bin/bash
echo "=== Avvio sincronizzazione GestStay con GitHub ==="

# Aggiunge tutti i file modificati
git add .

# Chiede un messaggio personalizzato per il commit (o usa un default)
read -p "Inserisci il messaggio del commit (invio per default): " msg
if [ -z "$msg" ]; then
  msg="Aggiornamento automatico GestStay"
fi

# Esegue il commit
git commit -m "$msg"

# Esegue il push su GitHub
git push origin main

echo "=== Operazione completata! ==="
