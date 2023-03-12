
import { Canvas } from '@react-three/fiber'
import React from 'react';

class FbxModel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                <boxGeometry />
                <meshStandardMaterial />
                </mesh>
            </Canvas>;
    }
}
export default FbxModel