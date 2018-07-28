import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography
} from "material-ui";


let lessons = {

};

this.fetchLessonText = (lessonName) => {
    return lessonName ? this.lessons.get(lessonName) : null ;
};

export const LessonTextRenderer = (props) => (
    <div>
        {/*<section>*/}
            {/*<p onLoad={this.fetchLessonText()}>*/}
                {/*Loading lesson text ...*/}
            {/*</p>*/}
        {/*</section>*/}
        {/*<div style={{float:"right", width:"480px"}}>*/}
        <div style={{float: "right", width: window.visualViewport.width * 0.30, height: '100%'}}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={{}}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>

                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    image="/static/images/cards/paella.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with
                        your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites">

                    </IconButton>
                    <IconButton aria-label="Share">

                    </IconButton>
                </CardActions>
                <withWidth>
                    <CardContent>
                        <Typography paragraph variant="body2">
                            Method:
                        </Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                            cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                            Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                            the rice, and cook again without stirring, until mussels have opened and rice is
                            just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </withWidth>
            </Card>
        </div>
    </div>
);