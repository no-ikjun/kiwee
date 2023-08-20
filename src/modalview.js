import styles from './modal.css';

function ModalBasic({ setModalOpen, id, title, content, writer }: PropsType) {
    
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p>모달창입니다.</p>
        </div>
    );
}
export default ModalBasic;