import React, { useEffect, useState } from 'react';
import { ModalContainer, ModalContent, ButtonContainer } from './style';
import { EventModalProps } from '../../interfaces/modal';
import { CalendarEventsProps } from '../../interfaces/events';
import { saveEventToLocalStorage } from '../../services/localStorageService';
import CustomButton from '../Button';
import Input from '../Input';
import { theme } from '../../styles/theme';
import { toast } from 'react-toastify';

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  time,
  handleSave,
  selectedDate,
}) => {
  const [eventName, setEventName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(selectedDate.format('YYYY-MM-DD'));


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

      toast.success(`Evento '${eventName}' adicionado para o horário ${time}`);
      onClose();

      // Limpar os campos
      setEventName('');
      setDescription('');
      setEventDate('');
    } else {
      toast.error('Por favor, preencha todos os campos.');
    }
  };

  // Upgrade the date 
  useEffect(() => {
    setEventDate(selectedDate.format('YYYY-MM-DD'));
  }, [selectedDate]);


  if (open)
    return (
      <ModalContainer>
        <ModalContent>
          <h3 >Adicionar Evento para {time}</h3>
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
            type="date"
            disabled
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <Input type="time" value={time} disabled />

          <ButtonContainer>
            <CustomButton
              label="Cancelar"
              onClick={onClose}
              color="primary"
              style={{
                border: `1px solid ${theme.colors.hover}`,
              }}
              variant="text"
            />
            <CustomButton
              label="Salvar"
              onClick={handleSubmit}
              color="primary"
            />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    );
};

export default EventModal;
