import React from "react"
import styles from '../../../styles/Projects.module.css'

import Slider from 'react-slick'

import sectionData from '../../../components-data/projects'

export default class Projects extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand'
        }
        return (
            <div className={styles.projectsContainer}>
                <div className={styles.layer}/>
                <Slider
                    {...settings}
                    className={styles.projects_slider}
                >
                    {
                        sectionData.projects.map(function(project) {
                            return (
                                <div
                                    className={styles.projects_projectWrapper}
                                    key={project.title}
                                >
                                    <div className={styles.projects_title}>{project.title}</div>
                                    <Slider
                                        {...settings}
                                        dots={true}
                                        className={styles.projects_imageSlider}
                                    >
                                        {project.images.map(function (image) {
                                            return (
                                                <img className={styles.projects_projectImage} src={'/projects/' + image} key={image}/>
                                            )
                                        })}
                                    </Slider>
                                    <div className={styles.projects_iconContainer}>
                                        {
                                            project.stack.map(function (icon) {
                                                return(
                                                    <img className={styles.projects_icon} src={'/stack/' + icon} key={icon}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={styles.projects_description}>{project.description}</div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <span className={styles.projects_ghLink}>
                    For more information you can check my empty
                    <a
                        href={sectionData.gitHubLink}
                        target='_blank'
                        className={styles.link}
                    >
                        GitHub
                    </a>
                </span>
            </div>
        )
    }
}