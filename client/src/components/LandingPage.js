import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { animated, useSpring } from 'react-spring';

const LandingPage = () => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { scale: 1 },
    to: { scale: 1.2 },
    config: { duration: 2000 }
  });

  return (
    <Container>
      <CanvasWrapper>
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Sphere visible args={[1, 100, 200]} scale={1.5}>
            <MeshDistortMaterial
              color="#8352FD"
              attach="material"
              distort={0.4}
              speed={1.5}
            />
          </Sphere>
        </Canvas>
      </CanvasWrapper>
      <Content>
        <Title>Welcome to My Interactive 3D Landing Page</Title>
        <animated.div style={styles}>
          <GetStartedButton>Get Started</GetStartedButton>
        </animated.div>
      </Content>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  text-align: center;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const GetStartedButton = styled.button`
  background-color: #8352FD;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6842cc;
  }
`;
