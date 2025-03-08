import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { urlToName } from "@/utils/url";

import { USER } from "../data/user";

export function Footer() {
  return (
    <footer className="screen-line-before relative border-x border-grid pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        Inspired by tailwindcss.com.
      </p>

      <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
        Built by{" "}
        <a
          className="link"
          href="https://linkedin.com/in/ncdai"
          target="_blank"
          rel="noopener noreferrer"
        >
          ncdai
        </a>
        . The source code is available on{" "}
        <a
          className="link"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <div className="mb-5 flex justify-center">
        <a
          href="https://www.dmca.com/Protection/Status.aspx?ID=85a452ca-06aa-4352-bfeb-7cb563dbd2b9&refurl=https://chanhdai.com/"
          title="DMCA.com Protection Status"
          aria-label="DMCA.com Protection Status"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-muted-foreground transition-colors hover:text-foreground"
        >
          <svg
            height="20"
            viewBox="0 0 85 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.689 5.23409L21.0561 3.60041L19.9522 4.70439C18.1345 2.73358 15.6854 1.45984 13.0281 1.10337C10.3709 0.746904 7.67263 1.33012 5.39982 2.75218C3.12701 4.17425 1.42253 6.34578 0.581065 8.89133C-0.260404 11.4369 -0.185967 14.1965 0.791507 16.693C1.76898 19.1894 3.58805 21.2659 5.93421 22.5634C8.28038 23.8609 11.0062 24.2978 13.6403 23.7986C16.2745 23.2994 18.6514 21.8955 20.3601 19.8295C22.0689 17.7636 23.0021 15.1655 22.9984 12.4845C22.9991 10.3983 22.4263 8.35206 21.3424 6.56949L22.689 5.23409ZM20.7244 12.4734C20.7181 14.6327 19.9555 16.7216 18.569 18.377C17.1825 20.0325 15.2598 21.1498 13.135 21.5348C11.0103 21.9198 8.81777 21.5483 6.93854 20.4846C5.05931 19.421 3.61214 17.7326 2.84852 15.7127C2.0849 13.6929 2.0531 11.4694 2.75865 9.42853C3.4642 7.3877 4.8625 5.65857 6.71054 4.54163C8.55859 3.4247 10.7396 2.99057 12.8745 3.31469C15.0094 3.63881 16.9632 4.70068 18.3965 6.31578L10.4175 14.2939L6.63243 10.5088L4.94389 12.1314L10.3626 17.5493L19.6753 8.23575C20.361 9.54286 20.7219 10.9965 20.7244 12.4734ZM30.8522 13.9999H25.9983V0.000481197H30.5934C31.1925 -0.00380443 31.7908 0.0304806 32.3848 0.104193C32.9385 0.172459 33.4826 0.303883 34.0065 0.4959C35.1136 0.888631 36.0706 1.61704 36.7441 2.57957C37.6067 3.85451 38.0441 5.36954 37.9938 6.90806C37.9938 11.6282 35.6127 13.9922 30.8522 13.9999ZM33.6465 4.21411C33.3389 3.84573 32.9497 3.55408 32.5097 3.3623C32.0698 3.17053 31.5912 3.08389 31.1119 3.10928H29.5348V10.8457H31.1119C31.5991 10.8817 32.088 10.8036 32.5397 10.6176C32.9914 10.4316 33.3936 10.1429 33.7142 9.77429C34.2839 8.96634 34.5581 7.98692 34.4907 7.00063C34.5386 6.00254 34.2404 5.01768 33.6465 4.21411ZM51.8312 13.9545L51.9281 3.4427L49.0747 13.9545H46.8342L44.0023 3.4427L44.0991 13.9202H40.998V0.000481197H45.3051L47.933 9.1803L50.5284 0.000481197H54.9975V13.9999L51.8312 13.9545ZM70.9974 8.71831C70.6369 10.2446 69.7562 11.5977 68.5066 12.5454C67.1243 13.5791 65.4206 14.0897 63.6977 13.9868C61.9747 13.8839 60.3439 13.174 59.0945 11.9831C58.4087 11.3413 57.8672 10.5608 57.5062 9.69367C57.1452 8.82649 56.9728 7.89241 57.0006 6.95349C56.9809 6.02909 57.1551 5.11083 57.5119 4.25785C57.8687 3.40486 58.4002 2.63608 59.0722 2.00101C59.7357 1.34844 60.5232 0.835482 61.3882 0.492462C62.2533 0.149441 63.1783 -0.0166823 64.1087 0.00390966C65.2966 -0.036587 66.4741 0.238118 67.5214 0.800107C68.5688 1.3621 69.4487 2.19134 70.0717 3.20356C70.5378 3.86216 70.8538 4.61497 70.9974 5.40894H67.3598C67.1477 4.70601 66.7076 4.09367 66.1091 3.66844C65.5105 3.24322 64.7874 3.0293 64.0538 3.06042C63.5548 3.04899 63.0594 3.14891 62.6038 3.35292C62.1482 3.55694 61.7437 3.85991 61.4199 4.23982C60.7787 4.99643 60.4374 5.96201 60.4608 6.95349C60.4374 7.9706 60.7906 8.9605 61.4525 9.73314C62.0996 10.532 63.081 10.9845 64.1096 10.9571C64.8206 10.9653 65.5165 10.7506 66.0994 10.3433C66.6823 9.93593 67.123 9.35631 67.3598 8.68574L70.9974 8.71831ZM81.1484 13.9999L80.4292 11.9737H75.5873L74.8451 13.9999H70.9966L76.6279 0.000481197H79.4598L84.9969 13.9999H81.1484ZM78.0773 4.32897L76.627 9.13058H79.5155L78.0773 4.32897ZM25.9983 24V17.0016H28.4608C28.7951 16.9939 29.1294 17.0161 29.4603 17.0693C29.75 17.1139 30.026 17.2253 30.2711 17.395C30.4914 17.575 30.6714 17.8064 30.7974 18.0704C30.9285 18.3704 30.9971 18.6961 30.9971 19.027C31.0139 19.5791 30.8224 20.1173 30.4605 20.5346C30.2044 20.7694 29.9008 20.9462 29.5702 21.053C29.2396 21.1598 28.8899 21.1941 28.5448 21.1535H26.8615V24H25.9983ZM26.8615 20.3315H28.5551C28.9768 20.3752 29.3985 20.2552 29.7448 19.9947C29.9951 19.7607 30.128 19.4152 30.1022 19.0604C30.1092 18.7936 30.0361 18.5309 29.8922 18.3061C29.7686 18.1034 29.573 17.9549 29.3445 17.8904C29.0771 17.8447 28.8058 17.8257 28.5346 17.8338H26.8615V20.3315ZM32.9976 23.9657V17.0033H36.0087C36.4797 16.9841 36.9504 17.0485 37.399 17.1936C37.7178 17.3187 37.9844 17.5518 38.1549 17.8536C38.3418 18.1724 38.4395 18.5358 38.4395 18.9061C38.4517 19.3695 38.2826 19.8195 37.9681 20.1601C37.5735 20.5318 37.0635 20.7571 36.523 20.7986C36.715 20.8921 36.895 21.0086 37.0595 21.1458C37.3467 21.4235 37.6004 21.7355 37.8155 22.0749L38.9984 23.9666H37.9029L37.0055 22.5223C36.8012 22.1916 36.5818 21.8704 36.3481 21.5598C36.2284 21.3799 36.0761 21.2241 35.899 21.1003C35.772 21.0142 35.6315 20.9499 35.4833 20.9101C35.3157 20.8935 35.1469 20.8935 34.9793 20.9101H33.9173V24L32.9976 23.9657ZM33.9173 20.0821H35.8553C36.1818 20.0943 36.508 20.0487 36.8187 19.9475C37.0321 19.8687 37.2155 19.7238 37.345 19.5335C37.4904 19.3114 37.5535 19.0454 37.5235 18.7817C37.4934 18.5179 37.3721 18.273 37.1804 18.0893C36.8661 17.8545 36.4768 17.7429 36.0858 17.7756H33.9173V20.0821ZM39.0044 20.6041C38.9444 19.6389 39.2949 18.6901 39.9798 17.9624C40.6363 17.3221 41.5552 16.9724 42.5066 17.0024C43.1418 16.994 43.7687 17.1477 44.328 17.449C44.8321 17.746 45.2401 18.182 45.5031 18.7047C45.8176 19.2575 45.9865 19.8704 45.9968 20.4952C46.0085 21.1396 45.8503 21.7758 45.5382 22.3397C45.257 22.8753 44.8127 23.3075 44.2697 23.574C43.7224 23.8601 43.1129 24.0061 42.4954 23.9991C41.8493 24.0116 41.2118 23.8496 40.65 23.5303C40.1459 23.2332 39.7379 22.7973 39.4749 22.2746C39.1893 21.7623 39.0282 21.1901 39.0044 20.6041ZM40.0038 20.6041C39.9609 21.3086 40.2138 22.0012 40.7083 22.5369C41.1797 22.9852 41.826 23.2389 42.5006 23.2389C43.1751 23.2389 43.8214 22.9852 44.2928 22.536C44.7985 21.972 45.0505 21.2495 44.9982 20.5166C45.0024 20.0189 44.894 19.5266 44.6811 19.0767C44.4893 18.6755 44.1822 18.3407 43.7991 18.115C42.8168 17.5647 41.5603 17.695 40.7323 18.4321C40.4575 18.7229 40.2481 19.0692 40.1183 19.4477C39.9885 19.8262 39.9413 20.2281 39.9798 20.6264L40.0038 20.6041ZM49.0259 24V17.833H46.9979V16.9999H51.9975V17.833H49.8573V24H49.0259ZM52.9978 24V16.9999H57.8465V17.833H53.8815V19.9715H57.5877V20.7926H53.8815V23.1789H57.9974V24H52.9978ZM64.1087 21.5255L64.9975 21.7518C64.8596 22.4071 64.5048 22.9968 63.9904 23.4257C63.4773 23.8137 62.8472 24.0153 62.2042 23.9974C61.5855 24.0209 60.973 23.8675 60.4385 23.5552C59.9525 23.2498 59.5741 22.8003 59.3559 22.2695C59.1109 21.693 58.9892 21.0718 58.9985 20.4455C58.9814 19.8104 59.1185 19.1804 59.3997 18.6104C59.6524 18.1068 60.0528 17.6924 60.5473 17.4224C61.0662 17.1331 61.6531 16.9878 62.247 17.0016C62.8533 16.9843 63.4491 17.1622 63.9467 17.509C64.419 17.8698 64.755 18.3798 64.8998 18.9558L64.023 19.1607C63.9128 18.7415 63.6789 18.3651 63.3519 18.0807C63.0351 17.8576 62.6558 17.7406 62.2685 17.7464C61.8079 17.7325 61.3543 17.8606 60.9691 18.1133C60.6218 18.36 60.3635 18.7124 60.2328 19.1178C60.0669 19.5415 59.9755 19.9907 59.9628 20.4455C59.9542 20.9563 60.0382 21.4655 60.2114 21.9463C60.3519 22.344 60.6279 22.68 60.9913 22.896C61.3368 23.106 61.7345 23.214 62.139 23.2097C62.5976 23.2226 63.0461 23.0736 63.4059 22.7889C63.7725 22.4563 64.0195 22.0124 64.1087 21.5255ZM68.0549 24V17.833H65.997V16.9999H70.9974V17.833H68.9395V24H68.0549ZM71.9968 24V16.9999H76.8353V17.833H72.8805V19.9715H76.5876V20.7926H72.8805V23.1789H76.9973V24H71.9968ZM78.997 23.988V17.0024H81.4946C81.9287 16.9917 82.3627 17.0256 82.7898 17.1036C83.1823 17.1833 83.5475 17.3573 83.8526 17.6093C84.2392 17.9264 84.5332 18.3378 84.7037 18.799C84.9103 19.3338 85.0097 19.9021 84.9951 20.4729C85.0013 20.9483 84.9345 21.4218 84.7971 21.8769C84.692 22.2425 84.5263 22.5879 84.3069 22.8986C84.1297 23.1509 83.9035 23.3648 83.6417 23.5277C83.3779 23.6991 83.0852 23.821 82.7778 23.8877C82.3944 23.9688 82.003 24.0062 81.6112 23.9991L78.997 23.988ZM79.9535 23.1677H81.5058C81.9001 23.1866 82.2943 23.142 82.6732 23.0332C82.9167 22.9674 83.1407 22.8439 83.3263 22.6732C83.5726 22.4241 83.7567 22.1205 83.8637 21.7869C83.9969 21.3617 84.0636 20.9185 84.0617 20.4729C84.0948 19.8876 83.9658 19.3046 83.6889 18.7878C83.4808 18.4294 83.1607 18.1493 82.7778 17.9907C82.3747 17.8831 81.9577 17.8375 81.5409 17.8553H79.9535V23.1677Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-1 border-t border-grid p-4 sm:grid-cols-4 md:grid-cols-5">
        {USER.otherWebsites.map((website) => {
          return (
            <a
              key={website}
              className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {urlToName(website)}
            </a>
          );
        })}
      </div>

      {/* <div
        className={cn(
          "screen-line-before relative",
          "[--pattern-foreground:var(--color-black)]/1 dark:[--pattern-foreground:var(--color-white)]/1",
          "bg-[image:repeating-linear-gradient(0deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px),repeating-linear-gradient(90deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_10px)]",
          "bg-[size:10px_10px] bg-[position:-1px_1px]"
        )}
      >
        <div className="relative z-1 -mx-px py-2">
          <WordmarkHoverEffect />
        </div>
      </div> */}
    </footer>
  );
}
