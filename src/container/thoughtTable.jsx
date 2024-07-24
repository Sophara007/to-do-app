import { Thoughts } from '../components/thoughts';
import { SwipeLeft } from '../components/swipeLeft';
import { SwipeRight } from '../components/swipeRight';
import { useSelector, useDispatch } from 'react-redux';
import { removeThought, selectThought, updateDone } from '../reducers/thoughtSlice';
import './tableStyles.css';

export function ThoughtTable({ handleSwipeLeft, handleSwipeRight }) {
    const thoughts = useSelector(selectThought);
    const dispatch = useDispatch();

    function handleRemoveThought(id) {
        dispatch(removeThought(id));
    }

    function handleUpdateDone(id, done) {
        dispatch(updateDone({ id, done }));
    }

    return (
        <div className="flex-container">
            {thoughts.length > 0 ? (
                <div className="flex justify-center items-center w-full h-full">
                    <SwipeLeft onClick={handleSwipeLeft} />
                    <div className="w-9/12 h-full bg-opacity-50 rounded-3xl shadow-xl p-8 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {thoughts.map((thought) => (
                                <Thoughts
                                    key={thought.id}
                                    onRemove={() => handleRemoveThought(thought.id)}
                                    onUpdateDone={() => handleUpdateDone(thought.id, !thought.done)}
                                    done={thought.done}
                                    text={thought.text}
                                />
                            ))}
                        </div>
                    </div>
                    <SwipeRight onClick={handleSwipeRight} />
                </div>
            ) : null}
        </div>
    );
}
