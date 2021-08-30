import { FC, ReactNode, useRef } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Icon, Button } from "components";
import { useOutsideClick } from "hooks";

type ModalProps = {
  className?: string;
  children?: ReactNode;
  onClose?: Function;
  open?: boolean;
};

const ModalCMP: FC<ModalProps> = ({
  className,
  children,
  onClose,
  open = false,
}) => {
  //-- Outside click trigger to close modal
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => onClose?.());

  return (
    <div className={clsx(className, open && "--open")}>
      <div className={`${className}__container`} ref={wrapperRef}>
        <Button
          className="close-modal"
          startIcon={<Icon icon={faTimes} />}
          noBg
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

const Modal = styled(ModalCMP)`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.overlay.light};
  height: 100vh;
  width: 100vw;
  overflow: auto;
  visibility: hidden;
  &.--open {
    visibility: visible;
  }
  &__container {
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 40px);
    max-width: 768px;
    margin-top: ${({ theme }) => theme.space(6)};
    margin-bottom: ${({ theme }) => theme.space(4)};
    background-color: ${({ theme }) => theme.colors.grey[8]};
    border-radius: ${({ theme }) => theme.borderRadius.inside};
    min-height: 200px;
    position: relative;
    > .close-modal {
      position: absolute;
      top: ${({ theme }) => theme.space(0.5)};
      right: ${({ theme }) => theme.space(1)};
      width: 45px;
      height: 45px;
      border-radius: 100px;
    }
  }
`;

export default Modal;
