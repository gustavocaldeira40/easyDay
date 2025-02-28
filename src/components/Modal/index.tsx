import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';
import { EventModalContainer } from './style';

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  time: string | null;
  date: string | null;
}

const EventModal: React.FC<EventModalProps> = ({ open, onClose, time, date }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    console.log(`Compromisso para ${date} às ${time}:`, { title, description });
    onClose(); // Fechar o modal após salvar
  };

  return (
    <Modal open={open} onClose={onClose}>
      <EventModalContainer>
        <h3>Adicionar Compromisso para {date} às {time}</h3>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          style={{ marginTop: 10 }}
        >
          Salvar
        </Button>
      </EventModalContainer>
    </Modal>
  );
};

export default EventModal;