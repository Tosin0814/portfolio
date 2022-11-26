import { Helmet } from "react-helmet"

export default function Scripts() {
    return (
        <Helmet>
            <script defer src="../../assets/vendor/purecounter/purecounter_vanilla.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/aos/aos.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/glightbox/js/glightbox.min.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/isotope-layout/isotope.pkgd.min.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/swiper/swiper-bundle.min.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/typed.js/typed.min.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/waypoints/noframework.waypoints.js" type="text/javascript"></script>
            <script defer src="../../assets/vendor/php-email-form/validate.js" type="text/javascript"></script>
            <script defer src='../../assets/js/main.js' type="text/javascript"></script>
        </Helmet>
    )
}