'use client'

import { Button, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useUser } from '@/app/context_provider';

const UserModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { userName, setUserName } = useUser();
    const [userInput, setUserInput] = useState("")
    const [openModal, setOpenModal] = useState(true);
  
    const handleUserInput = (event: any) => {
        setUserInput(event.target.value);
    };
  
    const setUserSession = () => {
        localStorage.setItem('user', userInput)
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            setUserName(storedUser);
            setOpenModal(false);
        }
    };

    return (
        <>
            <Modal className="dark" show={openModal} size="md" popup onClose={onClose}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Please type your name</h3>
                        <div>
                            <div className="mb-2 block">
                            </div>
                            <TextInput id="user_input" name="user_input" type="text" sizing="md" required onChange={handleUserInput} value={userInput}
                                helperText={
                                    <>
                                        Your name will be stored locally in order to sign all email templates correctly.
                                    </>
                                }
                            />
                        </div>
                        <div className="w-full">
                            <Button onClick={setUserSession} color="blue">Save</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UserModal;