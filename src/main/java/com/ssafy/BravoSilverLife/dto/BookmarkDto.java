package com.ssafy.BravoSilverLife.dto;

import com.ssafy.BravoSilverLife.entity.Bookmark;
import com.ssafy.BravoSilverLife.entity.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@ToString
@Schema(description = "북마크")
public class BookmarkDto {
    long articleNo;
    String address;
    String price;

    public static BookmarkDto of(Bookmark bookmarkEntity) {

        BookmarkDto bookmarkDto = BookmarkDto.builder()
                .address(bookmarkEntity.getAddress())
                .price(bookmarkEntity.getPrice())
                .build();

        return bookmarkDto;
    }
}
