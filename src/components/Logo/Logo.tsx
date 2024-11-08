type Props = {
  color?: string;
  size?: number;
};

const Logo = ({ color = "current-color", size = 20 }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size + 4}
      viewBox="0 0 40.572 44.93"
    >
      <g
        id="Group_8"
        data-name="Group 8"
        transform="translate(-408.483 -191.677)"
      >
        <g
          id="Group_2"
          data-name="Group 2"
          transform="translate(435.976 213.102)"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M520,278.568l-.018,3.564,0-3.564Z"
            transform="translate(-519.985 -278.568)"
            fill={color}
          />
        </g>
        <g
          id="Group_5"
          data-name="Group 5"
          transform="translate(408.483 197.877)"
        >
          <g id="Group_3" data-name="Group 3">
            <path
              id="Path_2"
              data-name="Path 2"
              d="M426.52,226.493l-.01,1.882-.029,5.7-.03,5.9v3.041h-1.531l-1.519-1.531.069-9.488V219.867l-13.46.058-1.527-1.523,0-1.531,3.041.008,13.457-.058,1.527,1.52v8.142Z"
              transform="translate(-408.483 -216.82)"
              fill={color}
            />
          </g>
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(17.998 11.554)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M481.507,263.68v5.7h-.029Z"
              transform="translate(-481.478 -263.68)"
              fill={color}
            />
          </g>
        </g>
        <g
          id="Group_7"
          data-name="Group 7"
          transform="translate(408.656 191.677)"
        >
          <g id="Group_6" data-name="Group 6">
            <path
              id="Path_4"
              data-name="Path 4"
              d="M449.583,228.958v6.129l-1.52,1.52h-37.28l-1.52-1.52v-6.252l1.519-1.52,19.674-.018-.053-27.733,1.52-1.523H446.48l-.027-3.228h-.272l-.016.014-33.941-.1-3.041,0,0-1.531,1.531-1.519,17.13.05,20.117.048,1.517,1.507.054,6.265-1.52,1.533H433.446l.051,27.731-1.519,1.523-19.676.018v3.213h34.24v-3.093l-8.357-.029-1.515-1.52,0-8.128,0-4.13.018-3.564.029-5.78,0-3.041h1.53l1.52,1.531-.059,8.113.006,13.482,8.357.029Z"
              transform="translate(-409.184 -191.677)"
              fill={color}
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M520.578,297.152l-.022.011.021-4.142Z"
              transform="translate(-493.095 -268.033)"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default Logo;
