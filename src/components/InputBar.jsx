import React from "react";

function InputBar({ userTask, setUserTask, addTask, clearText }) {
  return (
    <div className="input-bar">
      <div className="flex flex-row justify-between gap-3.5">
        <input
          type="text"
          placeholder="What do you plan to do?"
          value={userTask}
          onChange={(e) => {
            setUserTask(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        <button
          className="text-black hover:text-[#ff9c28] transition-colors duration-200"
          onClick={clearText}
        >
          <svg
            width="25"
            height="18"
            viewBox="0 0 34 23"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.4462 15.5658L21.3802 11.5L25.4462 7.43409L23.3282 5.31612L19.2623 9.38203L15.1964 5.31612L13.0784 7.43409L17.1443 11.5L13.0784 15.5658L15.1964 17.6839L19.2623 13.618L23.3281 17.6839L25.4462 15.5658ZM1.20293 14.4042L8.55463 21.7559C9.46124 22.6624 10.2266 23 11.8694 23H29.1194C31.3877 23 33.2266 21.1612 33.2266 18.8929V4.10714C33.2266 1.83885 31.3877 0 29.1194 0H11.8694C10.2266 0 9.46124 0.337854 8.55463 1.24438L1.20293 8.59584C-0.400995 10.1998 -0.400995 12.8002 1.20293 14.4042ZM11.8694 20.5357C11.048 20.5357 10.7234 20.4394 10.2972 20.0134L2.9455 12.6617C2.30389 12.0201 2.30389 10.98 2.9455 10.3383L10.2972 2.98688C10.7234 2.5608 11.048 2.46429 11.8694 2.46437H29.1194C30.0268 2.46437 30.7623 3.19987 30.7623 4.10722V18.8929C30.7623 19.8002 30.0268 20.5358 29.1194 20.5358L11.8694 20.5357Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          className="text-black hover:text-[#ff9c28] transition-colors duration-200"
          onClick={addTask}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_52_271)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9541 0.181435C22.4895 -0.0140314 23.0693 -0.0533946 23.6264 0.0681193C24.189 0.19085 24.7045 0.472538 25.1116 0.879694C25.5187 1.28685 25.8004 1.80236 25.9232 2.36493C26.0446 2.92192 26.0052 3.50187 25.8099 4.03715L19.1724 23.9309C19.0107 24.4201 18.7256 24.8609 18.3451 25.2086C17.9657 25.5553 17.5038 25.7988 17.0035 25.9162C16.5032 26.0382 15.9797 26.0278 15.4844 25.8863C14.9896 25.7449 14.5401 25.4775 14.1799 25.1102L10.6191 21.5656L6.8787 23.4998C6.58704 23.6506 6.23739 23.6362 5.95914 23.4618C5.6809 23.2876 5.51541 22.9791 5.52393 22.6509L5.67728 16.7382L18.7607 7.23449C19.2794 6.85775 19.3946 6.13188 19.0177 5.61324C18.6409 5.09457 17.9151 4.97954 17.3965 5.35628L4.09102 15.0212L0.878709 11.8089C0.530823 11.4613 0.274378 11.0324 0.133055 10.5613C-0.00726208 10.0936 -0.0300591 9.59852 0.066604 9.11997C0.163392 8.59716 0.397098 8.10929 0.743977 7.70616C1.09323 7.30027 1.54454 6.99501 2.05126 6.82194L2.05752 6.8198L21.9541 0.181435Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_52_271">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default InputBar;
