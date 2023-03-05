import _ from 'lodash';
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


import { Input } from '@nextui-org/react';
import { Container, Grid, Card, Text } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [todos, setTodos] = useState([
        {
            title: 'Testing1'
            , content: 'Testing1 Content'
            , id: 1
        }
        , {
            title: 'Testing2'
            , content: 'Testing2 Content'
            , id: 2
        }
        , {
            title: 'Testing3'
            , content: 'Testing3 Content'
            , id: 3
        }
        , {
            title: 'Testing4'
            , content: 'Testing4 Content'
            , id: 4
        }
    ]);

    const renderedTodos = (todos_input) => {
        return _.map(todos_input, (todo) => {
            return <Grid xs={12} sm={4} key={todo.id}>
                    <Card>
                        <Card.Header>
                            <Text b>{todo.title}</Text>
                        </Card.Header>
                        <Card.Body>
                            <Text>{todo.content}</ Text>
                        </Card.Body>
                    </Card>
                </Grid>
        })
    }
    return (
        <>
        <Head>
            <title>My Next Todo App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container AlignItems='center'>

            <Grid.Container gap={2}>
                <Grid xs={12} justify="center">
                    <div className={styles.title}>Todo List</div>
                </Grid>
                <Grid xs={12} justify="center">
                    <Input placeholder="New Todo Item..." />
                </Grid>
                <Grid.Container xs={12} gap={2}>
                    {renderedTodos(todos)}
                </Grid.Container>
            </Grid.Container>
        </Container>
        </>
    )
}
