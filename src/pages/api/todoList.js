import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("next-js-todo");
    if (req.method === 'GET') {
        const todoList = await db.collection("todos").find({}).toArray();
        res.status(200).json({ todoList });
        // const todoList = [
        //     {
        //         title: 'Testing1'
        //         , content: 'Testing1 Content'
        //         , id: 1
        //     }
        //     , {
        //         title: 'Testing2'
        //         , content: 'Testing2 Content'
        //         , id: 2
        //     }
        //     , {
        //         title: 'Testing3'
        //         , content: 'Testing3 Content'
        //         , id: 3
        //     }
        //     , {
        //         title: 'Testing4'
        //         , content: 'Testing4 Content'
        //         , id: 4
        //     }
        // ]
        // res.status(200).json({ todoList })
    } else if (req.method === 'POST'){
        console.log(req.body)
        const newTodo = {
            title: req.body.title,
            content: req.body.content
        }
        const resposne = await db.collection("todos").insertOne(newTodo);
        res.json(resposne);
        // res.json({ status: 200, data: {result: 'success'} });

    } else {
        res.status(500).json({
            error: "Invalid method",
        });
    }
}
  