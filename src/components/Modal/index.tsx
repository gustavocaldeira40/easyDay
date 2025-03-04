import React, { useState } from 'react';
import { ModalContainer, ModalContent, ButtonContainer } from './style';
import { EventModalProps } from '../../interfaces/modal';
import { CalendarEventsProps } from '../../interfaces/events';
import { saveEventToLocalStorage } from '../../services/localStorageService';
import CustomButton from '../Button';
import Input from '../Input';

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  time,
  handleSave,
  selectedDate
}) => {
  const [eventName, setEventName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(selectedDate.format('yyyy-MM-dd')); // Agora inicializa com a data recebida
  const [eventTime, setEventTime] = useState<string>(time || ''); // Inicializa com o valor de time

  const handleSubmit = () => {
    if (eventName && description && eventDate && eventTime) {
      const newEvent: CalendarEventsProps = {
        title: eventName,
        description,
        date: eventDate,
        time: eventTime,
      };

      // Salvar no LocalStorage
      saveEventToLocalStorage(newEvent);
      handleSave(newEvent); // Atualiza o estado no componente pai

      alert(`Evento '${eventName}' adicionado para o horário ${eventTime}`);
      onClose();

      // Limpar os campos
      setEventName('');
      setDescription('');
      setEventDate('');
      setEventTime('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  if (open)

    return (
      <ModalContainer>
        <ModalContent>
          {/* <h3>Adicionar Evento para {eventTime}</h3> */}
          <h3>Adicionar Evento para {eventTime}</h3>
          <Input
            label="Nome do Evento"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <Input
            label="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            rows={4}
          />
          <Input
            label="Data do Evento"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <Input
            label="Hora do Evento"
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />

          <ButtonContainer>
            <CustomButton label="Cancelar" onClick={onClose} color="secondary" variant="outlined" />
            <CustomButton label="Salvar" onClick={handleSubmit} color="primary" />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    );
};

export default EventModal;
