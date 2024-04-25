import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            {/* <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={cls.content}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div> */}
        </div>
    );
};
