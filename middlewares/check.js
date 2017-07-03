/**
 * Created by me on 2017/7/3.
 */
module.exports={
    checkLogin:function checkLogin(req,res,next){
        if(!req.session.user){
            req.flash('error','未登录');
            return res.redirect('/signin');//去登录
        };
        next();
    },
    checkNotLogin:function checkNotLogin(req,res,next){
        if(req.session.user){
            req.flash('error','已登录');
            return res.redirect('back');//返回原来的页面
        };
        next();
    }
};