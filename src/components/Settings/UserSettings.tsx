//src/components/Settings/UserSettings.tsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './UserSettings.css';

const UserSettings: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  // Ajoutez d'autres états pour les paramètres utilisateur selon les besoins avec le typage approprié

  // Fonction pour gérer la soumission des modifications avec typage d'événement
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Intégrez ici la logique pour mettre à jour les informations de l'utilisateur
    console.log("Settings updated with email:", email, "and new password:", newPassword);
    // Gérez la confirmation de la mise à jour ou affichez un message d'erreur
  };

  // Typage pour l'événement onChange
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(event.target.value);
  };

  return (
    <div className="UserSettings">
      <h2>Paramètres Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-email">Email :</label>
          <input
            type="email"
            id="user-email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Nouveau mot de passe :</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleChangePassword}
          />
        </div>
        {/* Ajoutez d'autres champs de paramètres ici selon les besoins */}
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UserSettings;

