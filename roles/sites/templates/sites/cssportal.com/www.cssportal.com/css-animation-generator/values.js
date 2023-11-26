ak = new Map;
ak.set("blink-fast",`  0%,
  50%,
  100% {
	opacity: 1;
  }

  25%,
  75% {
	opacity: 0;
  }`);
ak.set("blink-slow",`  0% {
	opacity: 1;
  }

  50% {
	opacity: 0.2;
  }

  100% {
	opacity: 1;
  }`);
ak.set("bounce-top",`  0% {
	animation-timing-function: ease-in;
	opacity: 1;
	transform: translateY(-45px);
  }

  24% {
	opacity: 1;
  }

  40% {
	animation-timing-function: ease-in;
	transform: translateY(-24px);
  }

  65% {
	animation-timing-function: ease-in;
	transform: translateY(-12px);
  }

  82% {
	animation-timing-function: ease-in;
	transform: translateY(-6px);
  }

  93% {
	animation-timing-function: ease-in;
	transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
	animation-timing-function: ease-out;
	transform: translateY(0px);
  }

  100% {
	animation-timing-function: ease-out;
	opacity: 1;
	transform: translateY(0px);
  }`);
ak.set("bounce-bottom",`  0% {
	animation-timing-function: ease-in;
	opacity: 1;
	transform: translateY(45px);
  }

  24% {
	opacity: 1;
  }

  40% {
	animation-timing-function: ease-in;
	transform: translateY(24px);
  }

  65% {
	animation-timing-function: ease-in;
	transform: translateY(12px);
  }

  82% {
	animation-timing-function: ease-in;
	transform: translateY(6px);
  }

  93% {
	animation-timing-function: ease-in;
	transform: translateY(4px);
  }

  25%,
  55%,
  75%,
  87% {
	animation-timing-function: ease-out;
	transform: translateY(0px);
  }

  100% {
	animation-timing-function: ease-out;
	opacity: 1;
	transform: translateY(0px);
  }`);
ak.set("bounce-left",`  0% {
	animation-timing-function: ease-in;
	opacity: 1;
	transform: translateX(-48px);
  }

  24% {
	opacity: 1;
  }

  40% {
	animation-timing-function: ease-in;
	transform: translateX(-26px);
  }

  65% {
	animation-timing-function: ease-in;
	transform: translateX(-13px);
  }

  82% {
	animation-timing-function: ease-in;
	transform: translateX(-6.5px);
  }

  93% {
	animation-timing-function: ease-in;
	transform: translateX(-4px);
  }

  25%,
  55%,
  75%,
  87%,
  98% {
	animation-timing-function: ease-out;
	transform: translateX(0px);
  }

  100% {
	animation-timing-function: ease-out;
	opacity: 1;
	transform: translateX(0px);
  }`);
ak.set("bounce-right",`  0% {
	animation-timing-function: ease-in;
	opacity: 1;
	transform: translateX(48px);
  }

  24% {
	opacity: 1;
  }

  40% {
	animation-timing-function: ease-in;
	transform: translateX(26px);
  }

  65% {
	animation-timing-function: ease-in;
	transform: translateX(13px);
  }

  82% {
	animation-timing-function: ease-in;
	transform: translateX(6.5px);
  }

  93% {
	animation-timing-function: ease-in;
	transform: translateX(4px);
  }

  25%,
  55%,
  75%,
  87%,
  98% {
	animation-timing-function: ease-out;
	transform: translateX(0px);
  }

  100% {
	animation-timing-function: ease-out;
	opacity: 1;
	transform: translateX(0px);
  }`);
ak.set("jello-horizontal",`  0% {
	transform: scale3d(1, 1, 1);
  }

  30% {
	transform: scale3d(1.25, 0.75, 1);
  }

  40% {
	transform: scale3d(0.75, 1.25, 1);
  }

  50% {
	transform: scale3d(1.15, 0.85, 1);
  }

  65% {
	transform: scale3d(0.95, 1.05, 1);
  }

  75% {
	transform: scale3d(1.05, 0.95, 1);
  }

  100% {
	transform: scale3d(1, 1, 1);
  }`);
ak.set("jello-vertical",`  0% {
	transform: scale3d(1, 1, 1);
  }

  30% {
	transform: scale3d(0.75, 1.25, 1);
  }

  40% {
	transform: scale3d(1.25, 0.75, 1);
  }

  50% {
	transform: scale3d(0.85, 1.15, 1);
  }

  65% {
	transform: scale3d(1.05, 0.95, 1);
  }

  75% {
	transform: scale3d(0.95, 1.05, 1);
  }

  100% {
	transform: scale3d(1, 1, 1);
  }`);
ak.set("pulse-heartbeat",`  0% {
	animation-timing-function: ease-out;
	transform: scale(1);
	transform-origin: center center;
  }

  10% {
	animation-timing-function: ease-in;
	transform: scale(0.91);
  }

  17% {
	animation-timing-function: ease-out;
	transform: scale(0.98);
  }

  33% {
	animation-timing-function: ease-in;
	transform: scale(0.87);
  }

  45% {
	animation-timing-function: ease-out;
	transform: scale(1);
  }`);
ak.set("pulse-regular",`  0% {
	transform: scale(1);
  }

  50% {
	transform: scale(1.1);
  }

  100% {
	transform: scale(1);
  }`);
ak.set("pulse-ping",`  0% {
	opacity: 0.8;
	transform: scale(0.2);
  }

  80% {
	opacity: 0;
	transform: scale(1.2);
  }

  100% {
	opacity: 0;
	transform: scale(2.2);
  }`);
ak.set("shake-horizontal",`  0%,
  100% {
	transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
	transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
	transform: translateX(10px);
  }

  80% {
	transform: translateX(8px);
  }

  90% {
	transform: translateX(-8px);
  }`);
ak.set("shake-vertical",`  0%,
  100% {
	transform: translateY(0);
  }

  10%,
  30%,
  50%,
  70% {
	transform: translateY(-8px);
  }

  20%,
  40%,
  60% {
	transform: translateY(8px);
  }

  80% {
	transform: translateY(6.4px);
  }

  90% {
	transform: translateY(-6.4px);
  }`);
ak.set("shake-rotate",`  0%,
  100% {
	transform: rotate(0deg);
	transform-origin: 50% 50%;
  }

  10% {
	transform: rotate(8deg);
  }

  20%,
  40%,
  60% {
	transform: rotate(-10deg);
  }

  30%,
  50%,
  70% {
	transform: rotate(10deg);
  }

  80% {
	transform: rotate(-8deg);
  }

  90% {
	transform: rotate(8deg);
  }`);
ak.set("shake-top",`  0%,
  100% {
	transform: rotate(0deg);
	transform-origin: 50% 0;
  }

  10% {
	transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
	transform: rotate(-4deg);
  }

  30%,
  50%,
  70% {
	transform: rotate(4deg);
  }

  80% {
	transform: rotate(-2deg);
  }

  90% {
	transform: rotate(2deg);
  }`);
ak.set("shake-bottom",`  0%,
  100% {
	transform: rotate(0deg);
	transform-origin: 50% 100%;
  }

  10% {
	transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
	transform: rotate(-4deg);
  }

  30%,
  50%,
  70% {
	transform: rotate(4deg);
  }

  80% {
	transform: rotate(-2deg);
  }

  90% {
	transform: rotate(2deg);
  }`);
ak.set("shake-left",`  0%,
  100% {
	transform: rotate(0deg);
	transform-origin: 0 50%;
  }

  10% {
	transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
	transform: rotate(-4deg);
  }

  30%,
  50%,
  70% {
	transform: rotate(4deg);
  }

  80% {
	transform: rotate(-2deg);
  }

  90% {
	transform: rotate(2deg);
  }`);
ak.set("shake-right",`  0%,
  100% {
	transform: rotate(0deg);
	transform-origin: 100% 50%;
  }

  10% {
	transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
	transform: rotate(-4deg);
  }

  30%,
  50%,
  70% {
	transform: rotate(4deg);
  }

  80% {
	transform: rotate(-2deg);
  }

  90% {
	transform: rotate(2deg);
  }`);
ak.set("vibrate-1",`  0% {
	transform: translate(0);
  }

  20% {
	transform: translate(-2px, 2px);
  }

  40% {
	transform: translate(-2px, -2px);
  }

  60% {
	transform: translate(2px, 2px);
  }

  80% {
	transform: translate(2px, -2px);
  }

  100% {
	transform: translate(0);
  }`);
ak.set("vibrate-2",`  0% {
	transform: translate(0);
  }

  20% {
	transform: translate(2px, -2px);
  }

  40% {
	transform: translate(2px, 2px);
  }

  60% {
	transform: translate(-2px, 2px);
  }

  80% {
	transform: translate(-2px, -2px);
  }

  100% {
	transform: translate(0);
  }`);
ak.set("vibrate-3",`  0% {
	transform: translate(0);
  }

  10% {
	transform: translate(-2px, -2px);
  }

  20% {
	transform: translate(2px, -2px);
  }

  30% {
	transform: translate(-2px, 2px);
  }

  40% {
	transform: translate(2px, 2px);
  }

  50% {
	transform: translate(-2px, -2px);
  }

  60% {
	transform: translate(2px, -2px);
  }

  70% {
	transform: translate(-2px, 2px);
  }

  80% {
	transform: translate(-2px, -2px);
  }

  90% {
	transform: translate(2px, -2px);
  }

  100% {
	transform: translate(0);
  }`);
ak.set("wobble-bottom",`  0%,
  100% {
	transform: translateX(0%);
	transform-origin: 50% 50%;
  }

  15% {
	transform: translateX(-30px) rotate(-6deg);
  }

  30% {
	transform: translateX(15px) rotate(6deg);
  }

  45% {
	transform: translateX(-15px) rotate(-3.6deg);
  }

  60% {
	transform: translateX(9px) rotate(2.4deg);
  }

  75% {
	transform: translateX(-6px) rotate(-1.2deg);
  }`);
ak.set("wobble-top",`  0%,
  100% {
	transform: translateX(0%);
	transform-origin: 50% 50%;
  }

  15% {
	transform: translateX(-30px) rotate(6deg);
  }

  30% {
	transform: translateX(15px) rotate(-6deg);
  }

  45% {
	transform: translateX(-15px) rotate(3.6deg);
  }

  60% {
	transform: translateX(9px) rotate(-2.4deg);
  }

  75% {
	transform: translateX(-6px) rotate(1.2deg);
  }`);
ak.set("wobble-left",`  0%,
  100% {
	transform: translateY(0) rotate(0);
	transform-origin: 50% 50%;
  }

  15% {
	transform: translateY(-30px) rotate(-6deg);
  }

  30% {
	transform: translateY(15px) rotate(6deg);
  }

  45% {
	transform: translateY(-15px) rotate(-3.6deg);
  }

  60% {
	transform: translateY(9px) rotate(2.4deg);
  }

  75% {
	transform: translateY(-6px) rotate(-1.2deg);
  }`);
ak.set("wobble-right",`  0%,
  100% {
	transform: translateY(0) rotate(0);
	transform-origin: 50% 50%;
  }

  15% {
	transform: translateY(-30px) rotate(6deg);
  }

  30% {
	transform: translateY(15px) rotate(-6deg);
  }

  45% {
	transform: translateY(-15px) rotate(3.6deg);
  }

  60% {
	transform: translateY(9px) rotate(-2.4deg);
  }

  75% {
	transform: translateY(-6px) rotate(1.2deg);
  }`);
ak.set("scale-up-center",`  0% {
	transform: scale(0.5);
  }

  100% {
	transform: scale(1);
  }`);
ak.set("scale-up-top",`  0% {
	transform: scale(0.5);
	transform-origin: 50% 0%;
  }

  100% {
	transform: scale(1);
	transform-origin: 50% 0%;
  }`);
ak.set("scale-up-right",`  0% {
	transform: scale(0.5);
	transform-origin: 100% 50%;
  }

  100% {
	transform: scale(1);
	transform-origin: 100% 50%;
  }`);
ak.set("scale-up-bottom",`  0% {
	transform: scale(0.5);
	transform-origin: 50% 100%;
  }

  100% {
	transform: scale(1);
	transform-origin: 50% 100%;
  }`);
ak.set("scale-up-left",`  0% {
	transform: scale(0.5);
	transform-origin: 0% 50%;
  }

  100% {
	transform: scale(1);
	transform-origin: 0% 50%;
  }`);
ak.set("scale-up-h-center",`  0% {
	transform: scaleX(0.4);
  }

  100% {
	transform: scaleX(1);
  }`);
ak.set("scale-up-h-left",`  0% {
	transform: scaleX(0.4);
	transform-origin: 0% 0%;
  }

  100% {
	transform: scaleX(1);
	transform-origin: 0% 0%;
  }`);
ak.set("scale-up-h-right",`  0% {
	transform: scaleX(0.4);
	transform-origin: 100% 100%;
  }

  100% {
	transform: scaleX(1);
	transform-origin: 100% 100%;
  }`);
ak.set("scale-up-v-center",`  0% {
	transform: scaleY(0.4);
  }

  100% {
	transform: scaleY(1);
  }`);
ak.set("scale-up-v-top",`  0% {
	transform: scaleY(0.4);
	transform-origin: 100% 0%;
  }

  100% {
	transform: scaleY(1);
	transform-origin: 100% 0%;
  }`);
ak.set("scale-up-v-bottom",`  0% {
	transform: scaleY(0.4);
	transform-origin: 0% 100%;
  }

  100% {
	transform: scaleY(1);
	transform-origin: 0% 100%;
  }`);
ak.set("scale-down-center",`  0% {
	transform: scale(1);
  }

  100% {
	transform: scale(0.5);
  }`);
ak.set("scale-down-top",`  0% {
	transform: scale(1);
	transform-origin: 50% 0%;
  }

  100% {
	transform: scale(0.5);
	transform-origin: 50% 0%;
  }`);
ak.set("scale-down-right",`  0% {
	transform: scale(1);
	transform-origin: 100% 50%;
  }

  100% {
	transform: scale(0.5);
	transform-origin: 100% 50%;
  }`);
ak.set("scale-down-bottom",`  0% {
	transform: scale(1);
	transform-origin: 50% 100%;
  }

  100% {
	transform: scale(0.5);
	transform-origin: 50% 100%;
  }`);
ak.set("scale-down-left",`  0% {
	transform: scale(1);
	transform-origin: 0% 50%;
  }

  100% {
	transform: scale(0.5);
	transform-origin: 0% 50%;
  }`);
ak.set("scale-down-h-center",`  0% {
	transform: scaleX(1);
  }

  100% {
	transform: scaleX(0.4);
  }`);
ak.set("scale-down-h-left",`  0% {
	transform: scaleX(1);
	transform-origin: 0% 0%;
  }

  100% {
	transform: scaleX(0.4);
	transform-origin: 0% 0%;
  }`);
ak.set("scale-down-h-right",`  0% {
	transform: scaleX(1);
	transform-origin: 100% 100%;
  }

  100% {
	transform: scaleX(0.4);
	transform-origin: 100% 100%;
  }`);
ak.set("scale-down-v-center",`  0% {
	transform: scaleY(1);
  }

  100% {
	transform: scaleY(0.4);
  }`);
ak.set("scale-down-v-top",`  0% {
	transform: scaleY(1);
	transform-origin: 100% 0%;
  }

  100% {
	transform: scaleY(0.4);
	transform-origin: 100% 0%;
  }`);
ak.set("scale-down-v-bottom",`  0% {
	transform: scaleY(1);
	transform-origin: 0% 100%;
  }

  100% {
	transform: scaleY(0.4);
	transform-origin: 0% 100%;
  }`);
ak.set("rotate-center",`  0% {
	transform: rotate(0);
  }

  100% {
	transform: rotate(360deg);
  }`);
ak.set("rotate-bottom",`  0% {
	transform: rotate(0);
	transform-origin: bottom;
  }

  100% {
	transform: rotate(360deg);
	transform-origin: bottom;
  }`);
ak.set("rotate-top",`  0% {
	transform: rotate(0);
	transform-origin: top;
  }

  100% {
	transform: rotate(360deg);
	transform-origin: top;
  }`);
ak.set("rotate-right",`  0% {
	transform: rotate(0);
	transform-origin: right;
  }

  100% {
	transform: rotate(360deg);
	transform-origin: right;
  }`);
ak.set("rotate-left",`  0% {
	transform: rotate(0);
	transform-origin: left;
  }

  100% {
	transform: rotate(360deg);
	transform-origin: left;
  }`);
ak.set("slide-top",`  0% {
	transform: translateY(0);
  }

  100% {
	transform: translateY(-100px);
  }`);
ak.set("slide-right",`  0% {
	transform: translateX(0);
  }

  100% {
	transform: translateX(100px);
  }`);
ak.set("slide-bottom",`  0% {
	transform: translateY(0);
  }

  100% {
	transform: translateY(100px);
  }`);
ak.set("slide-left",`0% {
	transform: translateX(0);
  }

  100% {
	transform: translateX(-100px);
  }`);