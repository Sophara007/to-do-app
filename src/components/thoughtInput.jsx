export function ThoughtInput({ handleInputChange, input, handleKeyPress }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div
                className="bg-opacity-50 mt-8  sm:mt-12 max-md:mt-14 md:mt-16 lg:mt-20 bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <label
                    htmlFor="thought"
                    className="block text-stone-800 text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-center font-poppins"
                >
                    What&rsquo;s on your mind today?
                </label>
                <input
                    onChange={handleInputChange}
                    value={input}
                    onKeyDown={handleKeyPress}
                    id="thought"
                    type="text"
                    placeholder="Share your thoughts..."
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-3 mt-1.5 sm:mt-2.5
                               focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                               transition-shadow duration-300 ease-in-out shadow-sm hover:shadow-md"
                />
            </div>
        </div>
    );
}
