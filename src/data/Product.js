
const womenjacket1 = require("../images/womenJacket.png")
const womenjacket2 = require('../images/womenJacket2.png')
const womenjacket3 = require('../images/womenJacket3.png')

const menjacket = require('../images/menJacket1.png')
const menjacket2 = require('../images/menJacket3.jpg')
const menjacket3 = require('../images/menJacket2.jpg')

const redDress = require('../images/vaydo1.jpg')
const redDress2 = require('../images/vaydo2.jpg')
const redDress3 = require('../images/vaydo3.jpg')

const womenPants = require('../images/quantrang.jpg')
const womenPants2 = require('../images/quanbe.jpg')
const womenPants3 = require('../images/quanvang.jpg')

const menShirt = require('../images/sominam.jpg')
const menShirt2 = require('../images/sominam2.jpg')
const menShirt3 = require('../images/sominam3.jpg')

const womenShirt = require('../images/womenShirt.png')
const womenShirt2 = require('../images/sominu.jpg')
const womenShirt3 = require('../images/sominu3.jpg')

const womenTshirt = require('../images/tshirt1.png')
const womenTshirt2 = require('../images/tshirt2.jpg')
const womenTshirt3 = require('../images/tshirt3.jpg')

const aodai = require('../images/aodai.jpg')
const aodai2 = require('../images/aodai2.jpg')
const aodai3 = require('../images/aodai3.jpg')

const shortnu = require('../images/shortnu.jpg')
const shortnu2 = require('../images/shortnu2.jpg')
const shortnu3 = require('../images/shortnu3.jpg')

const skirt = require('../images/skirt1.jpg')
const skirt2 = require('../images/skirt2.jpg')
const skirt3 = require('../images/skirt3.jpg')

const yembo = require('../images/yembo1.jpg')
const yembo2 = require('../images/yembo2.jpg')
const yembo3 = require('../images/yembo3.jpg')

const suit = require('../images/suit1.jpg')
const suit2 = require('../images/suit2.jpg')
const suit3 = require('../images/suit3.jpg')

const blazer = require('../images/blazer.jpg')
const blazer2 = require('../images/blazer2.jpg')
const blazer3 = require('../images/blazer3.jpg')

const swimsuit = require('../images/swimsuit1.jpg')
const swimsuit2 = require('../images/swimsuit2.jpg')
const swimsuit3 = require('../images/swimsuit3.jpg')

const aokhoacdai = require('../images/aokhoacdai.jpg')
const aokhoacdai2 = require('../images/aokhoacdai1.jpg')
const aokhoacdai3 = require('../images/aokhoacdai2.jpg')

const aolennu = require('../images/aolennu1.jpg')
const aolennu2 = require('../images/aolennu2.jpg')
const aolennu3 = require('../images/aolennu3.jpg')

const aolennam = require('../images/aolennam1.jpg')
const aolennam2 = require('../images/aolennam2.jpg')
const aolennam3 = require('../images/aolennam3.jpg')

const yemvay = require('../images/yemvay.jpg')
const yemvay2 = require('../images/yemvay2.jpg')
const yemvay3 = require('../images/yemvay3.jpg')

const croptop = require('../images/croptop.jpg')
const croptop2 = require('../images/croptop2.jpg')
const croptop3 = require('../images/croptop3.jpg')

const vaysomi = require('../images/vaysomi.jpg')
const vaysomi2 = require('../images/vaysomi2.jpg')
const vaysomi3 = require('../images/vaysomi3.jpg')

const Pants = require('../images/womenPants.png')
const Pants2 = require('../images/pants.png')
const vest = require('../images/vest.png')
const orange = require('../images/orange.png')
const Green = require('../images/green.png')
const jacket = require('../images/menJacket.png')


const products = [
    {
        id: 1,
        title: "Áo khoác nữ",
        price: "200000",
        image01: womenjacket1,
        image02: womenjacket2,
        image03: womenjacket3,
        categorySlug: "ao-khoac",
        available: 42160,
        slug: "ao-khoac-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 3.5
    },
    {
        id: 2,
        title: "Áo khoác nam",
        price: "240000",
        image01: menjacket,
        image02: menjacket2,
        image03: menjacket3,
        categorySlug: "ao-khoac",
        available: 12499,
        slug: "ao-khoac-nam,",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: "Men",
        star: 4
    },
    {
        id: 3,
        title: "Quần dài nữ",
        price: "200000",
        image01: womenPants,
        image02: womenPants2,
        image03: womenPants3,
        categorySlug: "quan-nu",
        available: 41980,
        slug: "quan-dai-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 3.5
    },
    {
        id: 4,
        title: "Váy nữ đỏ",
        price: "180000",
        image01: redDress,
        image02: redDress2,
        image03: redDress3,
        categorySlug: "vay",
        available: 13420,
        slug: "vay-nu-do",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4
    },
    {
        id: 5,
        title: "Sơ mi nam",
        price: "200000",
        image01: menShirt,
        image02: menShirt2,
        image03: menShirt3,
        categorySlug: "ao-somi",
        available: 2787,
        slug: "somi-nam",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: "Men",
        star: 4.9
    },
    {
        id: 6,
        title: "Sơ mi nữ",
        price: "200000",
        image01: womenShirt,
        image02: womenShirt2,
        image03: womenShirt3,
        categorySlug: "ao-somi",
        available: 4089,
        slug: "somi-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 5
    },
    {
        id: 7,
        title: "Áo thun nữ",
        price: "200000",
        image01: womenTshirt,
        image02: womenTshirt2,
        image03: womenTshirt3,
        categorySlug: "ao-thun",
        available: 4266,
        slug: "ao-thun-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.5
    },
    {
        id: 8,
        title: "Áo dài nữ",
        price: "200000",
        image01: aodai,
        image02: aodai2,
        image03: aodai3,
        categorySlug: "ao-dai",
        available: 9140,
        slug: "ao-dai-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 5
    },
    {
        id: 9,
        title: "quần short nữ",
        price: "200000",
        image01: shortnu,
        image02: shortnu2,
        image03: shortnu3,
        categorySlug: "quan-short",
        available: 1490,
        slug: "quan-short-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.5
    },
    {
        id: 10,
        title: "chân váy nữ",
        price: "200000",
        image01: skirt,
        image02: skirt2,
        image03: skirt3,
        categorySlug: "vay",
        available: 11640,
        slug: "chan-vay-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 3.5
    },
    {
        id: 11,
        title: "Yếm bò nữ",
        price: "200000",
        image01: yembo,
        image02: yembo2,
        image03: yembo3,
        categorySlug: "yem",
        available: 98340,
        slug: "yem-bo-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.2
    },
    {
        id: 12,
        title: "suit nam",
        price: "200000",
        image01: suit,
        image02: suit2,
        image03: suit3,
        categorySlug: "ao-suit",
        available: 11240,
        slug: "ao-suit-nam",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: "Men",
        star: 4
    },
    {
        id: 13,
        title: "Áo blazer nữ",
        price: "200000",
        image01: blazer,
        image02: blazer2,
        image03: blazer3,
        categorySlug: "ao-khoac",
        available: 8330,
        slug: "ao-blazer-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4
    },
    {
        id: 14,
        title: "Áo swimsuit nữ",
        price: "200000",
        image01: swimsuit,
        image02: swimsuit2,
        image03: swimsuit3,
        categorySlug: "swimsuit",
        available: 34540,
        slug: "swimt-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.3
    },
    {
        id: 15,
        title: "Áo khoác dài nam",
        price: "200000",
        image01: aokhoacdai,
        image02: aokhoacdai2,
        image03: aokhoacdai3,
        categorySlug: "ao-khoac",
        available: 34440,
        slug: "ao-khoac-nam",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: "Men",
        star: 4
    },
    {
        id: 16,
        title: "Áo len nữ",
        price: "200000",
        image01: aolennu,
        image02: aolennu2,
        image03: aolennu3,
        categorySlug: "ao-len",
        available: 35765,
        slug: "ao-len-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 3.9
    },
    {
        id: 17,
        title: "Áo len nam",
        price: "200000",
        image01: aolennam,
        image02: aolennam2,
        image03: aolennam3,
        categorySlug: "ao-len",
        available: 1356,
        slug: "ao-len-nam",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: "Men",
        star: 4.4
    },
    {
        id: 18,
        title: "yếm váy nữ",
        price: "200000",
        image01: yemvay,
        image02: yemvay2,
        image03: yemvay3,
        categorySlug: "yem",
        available: 2234,
        slug: "yem-vay-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 5
    },
    {
        id: 19,
        title: "Áo croptop nữ",
        price: "200000",
        image01: croptop,
        image02: croptop2,
        image03: croptop3,
        categorySlug: "ao-croptop",
        available: 5782,
        slug: "ao-croptop-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.5
    },
    {
        id: 20,
        title: "váy sơmi nữ",
        price: "200000",
        image01: vaysomi,
        image02: vaysomi2,
        image03: vaysomi3,
        categorySlug: "vay",
        available: 22455,
        slug: "vay-somi-nu",
        description: 'Các loại áo khoác nữ bomber hay bomber jacket cho thấy sự cá tính và sành điệu. Chất liệu chính của bomber là len, nilon giúp giữ ấm hiệu quả và chống ướt do nước mưa. Cùng với xu hướng thời trang mới, bomber được kết hợp thêm họa tiết và thiết kế phù hợp hơn. Một chiếc áo bomber phù hợp giúp bạn tôn lên chiều cao và sự cá tính của mình. Bomber jacket có thể phối với nhiều item với nhiều phong cách khác nhau. Bạn có thể phối cùng jean và giày thể thao để trở nên năng động và thoải mái hơn. Hoặc phối bomber với chân váy ngắn và boot cao cổ để thêm phần cá tính và quyến rũ. Nếu bạn yêu thích phong cách thanh lịch, nhẹ nhàng, nữ tính. Váy maxi với độ dài vừa phải và bomber pastel sẽ là lựa chọn hoàn hảo. ',
        Type: 'girl',
        star: 4.6
    },
]


const branch = [
    {
        img: Pants,
        title:"womenPants",
        row: 2,
        cols: 2
    },
    {
        img: vest,
        title: "vest",
        cols: 2
    },
    {
        img: orange,
        title: "Orange",
        cols: 2
    },
    {
        img: Green,
        title: "sale",
        cols: 2
    },
    {
        img: Pants2,
        title: "Pants",
    },
    {
        img: jacket,
        title: "Jacket",
    
    }

]

const getAllBranch = () => branch

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getTypeProducts = (type) => {
    if(type !== '')
        return products.filter(item => item.Type === type)
    else
        return products
}

const productData = {
    getAllProducts,
    getProducts,
    getAllBranch,
    getTypeProducts
}


export default productData