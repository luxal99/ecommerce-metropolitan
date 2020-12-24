package rs.ac.metropolitan.demo.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import rs.ac.metropolitan.demo.repository.UserRepository;
import rs.ac.metropolitan.demo.service.UserDetailsImpl;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static rs.ac.metropolitan.demo.constants.Const.HEADER_STRING;
import static rs.ac.metropolitan.demo.constants.Const.SECRET;
import static rs.ac.metropolitan.demo.constants.Const.TOKEN_PREFIX;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private UserRepository userRepository;


    public JWTAuthorizationFilter(AuthenticationManager authManager, UserRepository userRepository) {
        super(authManager);
        this.userRepository = userRepository;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws IOException, ServletException {
        String header = req.getHeader(HEADER_STRING);

        if (header == null || !header.startsWith(TOKEN_PREFIX)) {
            chain.doFilter(req, res);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(req);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(req, res);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            // parse the token.
                String username = JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                        .build()
                        .verify(token.replace(TOKEN_PREFIX, ""))
                        .getSubject();

            if (username != null) {
                return new UsernamePasswordAuthenticationToken(username, null,
                        new UserDetailsImpl(userRepository.findUserEntityByUsername(username)).getAuthorities());
            }
            return null;
        }
        return null;
    }
}