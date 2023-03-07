export default function handler(req, res) {
    if (req.method === 'GET') {
        const todoList = [
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
        ]
        res.status(200).json({ todoList })
    } else {
        res.status(500).json({
            error: "Invalid method",
        });
    }
}
  