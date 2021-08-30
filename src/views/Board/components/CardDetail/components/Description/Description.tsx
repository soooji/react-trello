import { useRef, useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";

type DescriptionProps = {
  children?: ReactNode;
  className?: string;
  description?: string;
  setDescription?: Function;
};

const DescriptionCMP: FC<DescriptionProps> = ({
  className,
  description = "",
  setDescription,
}) => {
  // ** States */
  const [editable, setEditable] = useState(false);

  //** Hooks */
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  //** Methods */
  const onEdit = () => {
    setEditable(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 200);
  };

  //** Local Variables */
  const placeholder = "Add a more detailed description...";

  return (
    <div className={className}>
      {!editable ? (
        <p onClick={onEdit}>
          {description.length > 0 ? description : placeholder}
        </p>
      ) : (
        <textarea
          ref={textAreaRef}
          onBlur={() => setEditable(false)}
          value={description}
          placeholder={placeholder}
          onChange={(e) => setDescription?.(e.target.value)}
        ></textarea>
      )}
    </div>
  );
};

const Description = styled(DescriptionCMP)`
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey[2]};
  }
  textarea {
    margin-top: ${({ theme }) => theme.space(-1.2)};
    border: none;
    outline: none;
    background: transparent;
    resize: none;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.grey[2]};
    width: calc(100% - 80px);
    border-radius: ${({ theme }) => theme.borderRadius.inside};
    border: 2px transparent solid;
    overflow-wrap: break-word;
    height: 45px;
    padding: ${({ theme }) => theme.space(1)};
    ${({ theme }) => theme.marginInlineStart(-1)};
    transition: ease border 0.2s;
    &:focus {
      border: 2px ${({ theme }) => theme.colors.primary.light} solid;
    }
  }
`;

export default Description;
