import { useRef, useCallback, useMemo, memo } from 'react';
import {
  VariableSizeList as List,
  ListChildComponentProps,
} from 'react-window';
import PhraseCard from './PhraseCard';
import { Phrase } from '../types/phrase';

interface MemoizedPhraseListProps {
  phrases: Phrase[];
  deletePhrase: (id: string) => void;
}

const MemoizedPhraseList = ({
  phrases,
  deletePhrase,
}: MemoizedPhraseListProps) => {
  const listRef = useRef<List>(null);
  const rowHeights = useRef<{ [key: number]: number }>({});

  const memoizedDeletePhrase = useCallback(deletePhrase, [deletePhrase]);

  const getItemSize = useMemo(
    () => (index: number) => rowHeights.current[index] || 100,
    [],
  );

  const setRowHeight = (index: number, size: number) => {
    if (rowHeights.current[index] !== size) {
      rowHeights.current = { ...rowHeights.current, [index]: size };
      listRef.current?.resetAfterIndex(index);
    }
  };

  return (
    <List
      ref={listRef}
      height={500}
      itemCount={phrases.length}
      itemSize={(index) => getItemSize(index) + 35}
      width="100%"
      overscanCount={10}
    >
      {({ index, style }: ListChildComponentProps) => (
        <div style={style} key={phrases[index]?.id}>
          <PhraseCard
            phrase={phrases[index]}
            deletePhrase={memoizedDeletePhrase}
            setRowHeight={(height: number) => setRowHeight(index, height)}
          />
        </div>
      )}
    </List>
  );
};

export default memo(MemoizedPhraseList);
