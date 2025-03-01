// src/components/Modal/EventModal.tsx
import React, { useState } from 'react';
import { ModalContainer, ModalContent, CloseButton, InputField, SubmitButton } from './style';

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  time: string | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, onClose, time }) => {
  const [eventName, setEventName] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleSubmit = () => {
    if (eventName) {
      alert(`Evento '${eventName}' adicionado para o horário ${time}`);
      onClose(); // Fecha o modal após adicionar o evento
    } else {
      alert('Por favor, insira um nome para o evento.');
    }
  };

  if (!open) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <h3>Adicionar Evento para {time}</h3>
        <InputField
          type="text"
          value={eventName}
          onChange={handleInputChange}
          placeholder="Nome do evento"
        />
        <SubmitButton onClick={handleSubmit}>Adicionar</SubmitButton>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default EventModal;
