import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cTodoColor};
`;

interface IDragabbleCardProps {
  memo: string;
  index: number;
}

const DragabbleCard = ({ memo, index }: IDragabbleCardProps) => {
  console.log(memo, "has been rendered");
  return (
    <Draggable key={memo} draggableId={memo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {memo}
        </Card>
      )}
    </Draggable>
  );
};

export default memo(DragabbleCard);
