import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "../../components/memo/DragabbleCard";
import { memoState, toDoState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.black};
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.bgAccentColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Memo = () => {
  const [memos, setMemos] = useRecoilState(memoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setMemos((oldMemos) => {
      const memosCopy = [...oldMemos];
      memosCopy.splice(source.index, 1);
      memosCopy.splice(destination.index, 0, draggableId);
      return memosCopy;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {memos.map((memo, index) => (
                  <DragabbleCard key={memo} index={index} memo={memo} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default Memo;
