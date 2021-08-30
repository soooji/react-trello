import { useRef, useState, ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Button } from "components";

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
  //   const [descriptionBackup, setDescriptionBackup] = useState("");

  //** Hooks */
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  //** Methods */
  const onEdit = () => {
    //  setDescriptionBackup(description);
    setEditable(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 200);
  };

  //   const onCancel = () => {
  //     setDescription?.(descriptionBackup);
  //   };

  //** Local Variables */
  const placeholder = "Add a more detailed description...";

  return (
    <div className={className}>
      {!editable ? (
        <p onClick={onEdit}>
          {description.length > 0 ? description : placeholder}
        </p>
      ) : (
        <>
          <textarea
            ref={textAreaRef}
            onBlur={() => setEditable(false)}
            value={description}
            placeholder={placeholder}
            onChange={(e) => setDescription?.(e.target.value)}
          ></textarea>
          <br />
          <Button onClick={() => setEditable(false)} margin="0px">
            Save
          </Button>
          {/* <Button
            onClick={() => onCancel()}
            startIcon={<Icon icon={faTimes} />}
            noBg
          /> */}
        </>
      )}
    </div>
  );
};

const Description = styled(DescriptionCMP)`
  margin-top: ${({ theme }) => theme.space(1.5)};

  p,
  textarea {
    font-weight: 350;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.grey[2]};
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
  textarea {
    margin-top: ${({ theme }) => theme.space(-1.2)};
    border: none;
    outline: none;
    background: transparent;
    resize: none;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.inside};
    border: 2px transparent solid;
    overflow-wrap: break-word;
    min-height: 100px;
    padding: ${({ theme }) => theme.space(1)};
    ${({ theme }) => theme.marginInlineStart(-1)};
    &:focus {
      border: 2px ${({ theme }) => theme.colors.primary.light} solid;
    }
  }
`;

export default Description;
