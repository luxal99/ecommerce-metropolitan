package rs.ac.metropolitan.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import rs.ac.metropolitan.demo.repository.UserRepository;
import rs.ac.metropolitan.demo.service.UserDetailsServiceImpl;

import static rs.ac.metropolitan.demo.constants.Const.*;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests()
                .antMatchers(HttpMethod.POST, SIGN_UP_URL).permitAll()
                .antMatchers(HttpMethod.GET, ROLE_ROUTE + "/**").permitAll()
                .antMatchers(HttpMethod.GET, PRODUCT_ROUTE).permitAll()
                .antMatchers(HttpMethod.GET, PRODUCT_CATEGORY_ROUTE).permitAll()
                .antMatchers(HttpMethod.GET, PRODUCT_BRAND_ROUTE).permitAll()
                .antMatchers(HttpMethod.POST, USER_INFO_ROUTE).permitAll()
                .antMatchers(HttpMethod.GET, USER_INFO_ROUTE).hasRole(ROLE_ADMIN)
                .antMatchers(HttpMethod.POST, PRODUCT_CATEGORY_ROUTE).hasRole(ROLE_ADMIN)
                .anyRequest().authenticated()
                .and()
                .addFilter(new JWTAuthFilter(authenticationManager(), userRepository))
                .addFilter(new JWTAuthorizationFilter(authenticationManager(), userRepository))
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}
