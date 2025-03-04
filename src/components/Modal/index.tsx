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
  const [eventDate, setEventDate] = useState<string>(selectedDate.format('yyyy-MM-dd'));

  const handleSubmit = () => {
    if (eventName && description && eventDate && time) {
      const newEvent: CalendarEventsProps = {
        title: eventName,
        description,
        date: eventDate,
        time: time,
      };

      // Salvar no LocalStorage
      saveEventToLocalStorage(newEvent);
      handleSave(newEvent); // Atualiza o estado no componente pai

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

  if (open)

    return (
      <ModalContainer>
        <ModalContent>
          {/* <h3>Adicionar Evento para {time}</h3> */}
          <h3>Adicionar Evento para {time}</h3>
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
            value={time || ''}
            disabled
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
