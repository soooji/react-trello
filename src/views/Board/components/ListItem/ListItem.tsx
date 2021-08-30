import { useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Modal } from "components";
import { CardDetail } from "./../index";

type ListItemProps = {
  children?: ReactNode;
  id: number;
  className?: string;
};

const ListItemCMP: FC<ListItemProps> = ({ className, id }) => {
  //** States */
  const [title] = useState<string>(
    "Swipe left or right to see other lists on this board."
  );
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div>
      <Modal open={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <CardDetail />
      </Modal>
      <div className={className} onClick={() => setIsEditOpen(true)}>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

const ListItem = styled(ListItemCMP)`
  background: ${({ theme }) => theme.colors.grey[9]};
  padding: ${({ theme }) => theme.space(1)};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.inside};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space(1)};

  &:hover {
    background: ${({ theme }) => theme.colors.grey[8]};
  }

  > .title {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey[2]};
  }
`;

export default ListItem;
