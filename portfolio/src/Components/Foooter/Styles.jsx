import styled from "styled-components";

export const FooterCont = styled.footer`
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`;

export const A = styled.a`
  padding: 10px;
  color: ${(props) => props.theme.fontColorSecondary};
  &:hover {
    color: ${(props) => props.theme.socialIconColor};
  }
`;


body {
	background: lightblue;
	margin: 0;
	animation: daynight 20s linear infinite;
	overflow: hidden;
}

@keyframes daynight {
	0% {
		background: #000;
	}

	25% {
		background: lightblue;
	}

	75% {
		background: #000;
	}

	100% {
		background: #000;
	}
}

.water {
	z-index: 4;
	background: cyan;
	width: 100%;
	height: 50vh;
	position: absolute;
	bottom: 0;
	left: 0;
	animation: gradient 20s linear infinite;
	transition: background 1s linear;
}

@keyframes gradient {
	0% {
		background: rgb(61, 97, 97);
	}
	10% {
		background: hsl(204, 50%, 29%);
	}
	25% {
		background: hsl(204, 100%, 50%);
	}
	30% {
		background: hsl(204, 50%, 50%);
	}
	50% {
		background: hsl(204, 32%, 36%);
	}
	60% {
		background: rgb(47, 71, 71);
	}
	68% {
		background: rgb(43, 59, 59);
	}
	75% {
		background: rgb(10, 10, 10);
	}
	80% {
		background: rgb(18, 20, 20);
	}
	85% {
		background: rgb(32, 37, 37);
	}
	90% {
		background: rgb(44, 58, 58);
	}
	95% {
		background: rgb(54, 66, 66);
	}
	100% {
		background: rgb(58, 82, 82);
	}
}

.stick {
	height: 0px;
	width: 100px;
	border-top: 50px solid chocolate;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	position: relative;
	top: -20px;
	left: -200px;
	animation: boat 10s linear infinite;
	display: flex;
	justify-content: center;
}

@keyframes boat {
	100% {
		transform: translateX(calc(100vw + 300px));
	}
}

.triangle {
	width: 0;
	height: 0;
	border: 40px solid transparent;
	border-bottom-color: chocolate;
	position: absolute;
	top: -120px;
}

.s2 {
	position: absolute;
	width: 100px;
	height: 0px;
	border: 50px solid transparent;
	border-left: 15px solid transparent;
	border-top: 35px solid rgba(95, 85, 78, 0.363);
	border-right: 15px solid transparent;
	top: -35px;
}

.sun {
	position: relative;
	top: calc(50vh);
	/* bottom: calc(50vh - 200px); */
	left: 0;
	width: 100px;
	height: 100px;
	background: gold;
	border-radius: 50%;
	--x: calc(100vw - 100px);
	--xby2: calc(var(--x) / 2);
	--y: calc((-200px - 100vh) / 2);
	animation: move 20s linear infinite;
	z-index: 2;
}

@keyframes move {
	5% {
		transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.2));
	}

	10% {
		transform: translate(calc(var(--x) * 0.2), calc(var(--y) * 0.4));
	}

	15% {
		transform: translate(calc(var(--x) * 0.3), calc(var(--y) * 0.6));
	}

	20% {
		transform: translate(calc(var(--x) * 0.4), calc(var(--y) * 0.8));
	}

	25% {
		transform: translate(calc(var(--x) * 0.5), calc(var(--y) * 1));
	}

	30% {
		transform: translate(calc(var(--x) * 0.6), calc(var(--y) * 0.8));
	}

	35% {
		transform: translate(calc(var(--x) * 0.7), calc(var(--y) * 0.6));
	}

	40% {
		transform: translate(calc(var(--x) * 0.8), calc(var(--y) * 0.4));
	}

	45% {
		transform: translate(calc(var(--x) * 0.9), calc(var(--y) * 0.2));
	}

	50% {
		transform: translate(calc(var(--x) * 1), calc(var(--y) * 0));
	}

	55% {
		transform: translate(calc(var(--x) * 0.9), calc(var(--y) * (-0.2)));
	}

	60% {
		transform: translate(calc(var(--x) * 0.8), calc(var(--y) * (-0.4)));
	}

	65% {
		transform: translate(calc(var(--x) * 0.7), calc(var(--y) * (-0.6)));
	}

	70% {
		transform: translate(calc(var(--x) * 0.6), calc(var(--y) * (-0.8)));
	}

	75% {
		transform: translate(calc(var(--x) * 0.5), calc(var(--y) * (-1)));
	}

	80% {
		transform: translate(calc(var(--x) * 0.4), calc(var(--y) * (-0.8)));
	}

	85% {
		transform: translate(calc(var(--x) * 0.3), calc(var(--y) * (-0.6)));
	}

	90% {
		transform: translate(calc(var(--x) * 0.2), calc(var(--y) * (-0.4)));
	}

	95% {
		transform: translate(calc(var(--x) * 0.1), calc(var(--y) * (-0.2)));
	}

	100% {
		transform: translate(calc(var(--x) * 0), calc(var(--y) * 0));
	}

	/* 50% {transform: translate(var(--xby2), var(--y))}
                100% {transform: translate(var(--x),0px)} */
}

.moon {
	position: absolute;
	bottom: calc(50vh - 200px);
	left: 0;
	width: 50px;
	height: 50px;
	background: rgb(201, 182, 182);
	border-radius: 50%;
	--x: calc(100vw);
	--xby2: calc(var(--x) / 2);
	--y: calc((-200px - 100vh) / 2);
	animation: moveMoon 13s linear infinite 2s;
	z-index: 2;
}

@keyframes moveMoon {
	0% {
		transform: translate(0px, 0px);
	}

	10% {
		transform: translate(calc(var(--x) * 0.1), calc(var(--y) * 0.2));
	}

	20% {
		transform: translate(calc(var(--x) * 0.2), calc(var(--y) * 0.4));
	}

	30% {
		transform: translate(calc(var(--x) * 0.3), calc(var(--y) * 0.6));
	}

	40% {
		transform: translate(calc(var(--x) * 0.4), calc(var(--y) * 0.8));
	}

	50% {
		transform: translate(calc(var(--x) * 0.5), calc(var(--y) * 1));
	}

	60% {
		transform: translate(calc(var(--x) * 0.6), calc(var(--y) * 0.8));
	}

	70% {
		transform: translate(calc(var(--x) * 0.7), calc(var(--y) * 0.6));
	}

	80% {
		transform: translate(calc(var(--x) * 0.8), calc(var(--y) * 0.4));
	}

	90% {
		transform: translate(calc(var(--x) * 0.9), calc(var(--y) * 0.2));
	}

	100% {
		transform: translate(calc(var(--x) * 1), calc(var(--y) * 0));
	}
}

.star {
	position: fixed;
	top: -10vh;
	right: -1vh;
	color: gold;
	transform: translateX(0);
	animation: fall 3s linear forwards;
}

@keyframes fall {
	to {
		transform: translateX(-105vw);
	}
}
