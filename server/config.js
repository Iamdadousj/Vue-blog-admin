//后台配置文件
export default {
    //数据库配置
    mysqlDB : {
		host:'192.168.1.101',
        user: 'root',
        password:'123456',
        database: 'blog'
    },
    upPath:'dist/upFile/',//上传路径
    //token 配置
    JWTs : {
        secret : 'scscms', // 指定密钥
        expiresIn:'5h'  //超时设置 m分钟 h小时 d天数
    },
    //邮件服务配置
    emailServer:{
        host: 'smtp.126.com',
        port: 465,
        secure: true,
        auth: {
            user: 'dadoubw@126.com',
            pass: 'xl666888'
        }
    },
    //公用：获取客户端IP
    getClientIP:function(ctx) {
        let req = ctx.request;
        let ip = ctx.ip ||
            req.headers['x-forwarded-for'] ||
            req.ip ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress || '';
        let arr = ip.match(/(\d{1,3}\.){3}\d{1,3}/);
        return arr ? arr[0] : '';
    }
}
