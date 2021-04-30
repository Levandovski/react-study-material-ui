import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Container, Card, CardHeader, CardContent, Pill, ContentPill } from './styles';

export const Tab = () => {

    const [open, setOpen] = useState(true);
    const handleClick = () =>{
        setOpen(preventState => !open);
    }
    const data = [
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
        {
            name:'Jesse'
        },
  
    ]


return (
    <>
        <Container>
            
                <motion.div                  
                    animate={{ height: open ? '500px'  : 'auto' , overflow:'hidden', marginBottom:100 }}                 
                >
                    <Card>
                        <CardHeader onClick={handleClick}>
                            <p>Filtro</p>
                            {!open ? 
                                <ContentPill>
                                    {data.map((e) =>(
                                        <Pill>{e.name}</Pill>
                                    ))}
                                </ContentPill>
                            :''}
                            <p>Fechar</p>
                        </CardHeader>
                        <CardContent style={{display: !open ? 'none' : ''}}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </CardContent>
                    </Card>
                </motion.div>
         
        </Container>
    </>
    )
}