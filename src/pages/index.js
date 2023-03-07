import _ from 'lodash';
import Head from 'next/head'
import Image from 'next/image'

import { useState, useRef, useEffect } from 'react'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


import { Button, Input } from '@nextui-org/react';
import { Container, Grid, Card, Text } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [todos, setTodos] = useState([]);
    const newTodoTitleRef =  useRef(null);
    const newTodoContentRef =  useRef(null);
    
    useEffect(() => {
        const getTodo = async () => {
            const response = await fetch("/api/todoList", {
                method: "GET",
            });
            return response.json();
        }
        getTodo().then((data) => {
            setTodos(data.todoList);
        });
    }, []);

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

    const onClickAddTodoButton = () => {
        const newTodoItem = {
            title: newTodoTitleRef.current.value
            , content: newTodoContentRef.current.value
            , id: todos.length
        }
        setTodos([...todos, newTodoItem])
    };

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
                <Grid.Container xs={12} gap={2} justify="center" >
                    <Grid xs={3}>
                    </Grid>
                    <Grid xs={2}>
                        <Input placeholder="Title" ref={newTodoTitleRef} type="text" />
                    </Grid>
                    <Grid xs={2}>
                        <Input placeholder="New Todo Item..." ref={newTodoContentRef} type="text" />
                    </Grid>
                    <Grid xs={2}>
                        <Button auto rounded onClick={onClickAddTodoButton}>Add</Button>
                    </Grid>
                    <Grid xs={3}>
                    </Grid>
                </Grid.Container>
                <Grid.Container xs={12} gap={2}>
                    {renderedTodos(todos)}
                </Grid.Container>
            </Grid.Container>
        </Container>
        </>
    )
}
