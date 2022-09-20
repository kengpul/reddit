import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { Col, Container, Row } from "reactstrap";

import PostCard from "../../components/Post/PostCard"
import Aside from "../../components/Aside/Aside";

export default function ShowPost() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/post/${id}`);
            const post = await response.json();
            setPost(post);
        }
        fetchPost();
    }, [id])

    return (
        <Container>
            <Row>
                <Col md='8' className="my-2">
                    {post && <PostCard post={post} options={true} />}
                </Col>
                <Col md='4' className='d-none d-md-block'>
                    <Aside />
                </Col>
            </Row>

        </Container>
    )
}