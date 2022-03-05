import Modal from 'react-modal';
import { Container, TransactionContainer, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/entradas.svg';
import outImg from '../../assets/saidas.svg';
import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../hooks/transactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  } 

  return(
    <Modal  
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="fechar modal" ></img>
      </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>
      <input 
        placeholder={'Título'}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input 
        placeholder={'Valor'} 
        type="number"
        value={amount}
        onChange={(event) => setAmount(+event.target.value)}
      />
      <TransactionContainer>
        <RadioBox 
          type="button" 
          isActive={type === 'deposit'}
          activeColor="green"
          onClick={() => setType('deposit')}
        >
          <img src={IncomeImg} alt="Income" />
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
          type="button" 
          isActive={type === 'withdraw'}
          activeColor="red"
          onClick={() => setType('withdraw')}
        >
          <img src={outImg} alt="Out" />
          <span>Saída</span>
        </RadioBox>
      </TransactionContainer>
      <input 
        placeholder={'Categoria'}
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}