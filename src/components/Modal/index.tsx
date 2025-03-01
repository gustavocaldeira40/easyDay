import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  InputField,
  TextareaField,
  SubmitButton,
  ButtonCancel,
  ButtonContainer, // Adicionando o container para os botões
} from './style';
import dayjs from 'dayjs';

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  time: string | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, onClose, time }) => {
  const [eventName, setEventName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventDate(e.target.value);
  };

  const handleSubmit = () => {
    if (eventName && description && eventDate) {
      const newEvent = {
        title: eventName,
        description,
        date: eventDate,
        time,
      };

      // Salvar no localStorage
      const storedEvents = JSON.parse(localStorage.getItem('events') || '[]');
      storedEvents.push(newEvent);
      localStorage.setItem('events', JSON.stringify(storedEvents));

      alert(`Evento '${eventName}' adicionado para o horário ${time}`);
      onClose();

      // Limpar os campos
      setEventName('');
      setDescription('');
      setEventDate('');
    } else {
      alert('Por favor, preencha todos os campos.');
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
          placeholder="Nome do Evento"
        />
        <TextareaField
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descrição"
        />
        <InputField type="date" value={eventDate} onChange={handleDateChange} />

        <ButtonContainer>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <SubmitButton onClick={handleSubmit}>Salvar</SubmitButton>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default EventModal;
